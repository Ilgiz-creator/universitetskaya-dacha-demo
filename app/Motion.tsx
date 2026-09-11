"use client";
import {useEffect} from "react";

/* Progressive enhancement: content is visible before JS and if animation is unavailable. */
type MotionConfig = { hero: string; art: string; reveal: string; artStart: string };
function initMotion(config: MotionConfig) {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return () => {};
  const played = new WeakSet<Element>();
  const animations = new Set<Animation>();
  const targets = new Map<Element, {kind: string; delay: number}>();
  const add = (selector: string, kind: string, delay = 0) => {
    if (!selector) return;
    document.querySelectorAll(selector).forEach((element, index) => {
      targets.set(element, { kind, delay: Math.min(index * delay, 160) });
    });
  };
  add(config.reveal, 'rise', 65);
  add(config.art, 'art');
  add(config.hero, 'hero', 70);
  let observer: IntersectionObserver;
  const play = (element: Element) => {
    if (played.has(element)) return;
    played.add(element);
    observer?.unobserve(element);
    element.classList.add('motion-seen');
    if (preference.matches || element.matches(':focus-within')) return;
    const {kind, delay} = targets.get(element)!;
    const base = getComputedStyle(element).transform;
    const finalTransform = base === 'none' ? '' : base;
    const offset = kind === 'art' ? config.artStart : 'translateY(18px)';
    const duration = kind === 'art' ? 1250 : kind === 'hero' ? 850 : 700;
    const animation = element.animate([
      {opacity: 0, transform: `${finalTransform} ${offset}`.trim()},
      {opacity: 1, transform: finalTransform || 'none'}
    ], {duration, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards'});
    animations.add(animation);
    const remove = () => animations.delete(animation);
    animation.addEventListener('finish', remove, {once: true});
    animation.addEventListener('cancel', remove, {once: true});
  };
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) play(entry.target);
  }, {threshold: .1});
  for (const element of targets.keys()) observer.observe(element);
  const focus = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) return;
    for (const element of targets.keys()) if (element.contains(event.target)) {
      played.add(element); observer.unobserve(element); element.classList.add('motion-seen');
      for (const animation of animations) if ((animation.effect as KeyframeEffect | null)?.target === element) animation.cancel();
    }
  };
  const reduce = () => {
    if (!preference.matches) return;
    for (const animation of animations) animation.cancel();
  };
  document.addEventListener('focusin', focus);
  preference.addEventListener('change', reduce);
  return () => {
    observer.disconnect();
    for (const animation of animations) animation.cancel();
    document.removeEventListener('focusin', focus);
    preference.removeEventListener('change', reduce);
  };
}

export default function Motion() {
  useEffect(() => initMotion({"hero": ".hero-content .eyebrow, .hero h1, .hero-copy, .hero-actions", "art": ".hero-image, .booking-orbit", "reveal": ".intro h2, .section-title-row h2, .comfort-card, .stay h2, .booking h2", "artStart": "scale(1.045)"}), []);
  return null;
}
