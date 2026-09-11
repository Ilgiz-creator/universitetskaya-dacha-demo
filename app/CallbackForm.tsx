'use client';
import { useEffect, useRef, useState } from 'react';

// Demo adapter: no delivery, network request or persistent storage.
// Connect the agreed recipient and backend before the business launches this form.
export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (submitted) resultRef.current?.focus(); }, [submitted]);
  return <div className="callback">
    <h3>Заказать звонок</h3>
    <form className="callback-form" hidden={submitted} onSubmit={event => {
      event.preventDefault();
      const field = phoneRef.current!;
      const digits = field.value.replace(/\D/g, '');
      field.setCustomValidity(digits.length >= 10 && digits.length <= 15 ? '' : 'Проверьте номер: укажите от 10 до 15 цифр с кодом страны.');
      if (!event.currentTarget.reportValidity()) return;
      setPhone(field.value.trim());setSubmitted(true);
    }}>
      <label>Ваше имя <span className="field-optional">необязательно</span><input name="name" type="text" autoComplete="given-name" maxLength={80} placeholder="Как к вам обращаться" /></label>
      <label>Телефон<input ref={phoneRef} name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={25} placeholder="+7 (___) ___-__-__" required onInput={event => event.currentTarget.setCustomValidity('')} /></label>
      <label>Удобное время и пожелания <span className="field-optional">необязательно</span><textarea name="wishes" rows={2} maxLength={500} placeholder="Например, позвонить после 18:00" /></label>
      <button className="button button-primary" type="submit">Заказать звонок</button>
    </form>
    <div className="callback-result" hidden={!submitted} ref={resultRef} tabIndex={-1} role="status">
      <span className="callback-check" aria-hidden="true">✓</span><h4>Спасибо!</h4><p>Заявка на звонок оформлена.</p><p className="callback-phone-label">Номер для связи</p><strong className="callback-number">{phone}</strong>
      <button className="callback-edit" type="button" onClick={() => {setSubmitted(false);requestAnimationFrame(() => phoneRef.current?.focus());}}>Изменить номер</button>
    </div>
  </div>;
}
