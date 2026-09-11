import CallbackForm from './CallbackForm';
export default function CallbackSection() {
  return <section className="stay-planner section" id="request" aria-labelledby="plan-title">
    <div><p className="eyebrow dark">Ваша поездка</p><h2 id="plan-title">Обсудим{' '}<br/>ваш приезд</h2><p>Оставьте номер — уточним даты, подходящий номер и условия проживания.</p><p className="stay-plan-note">Если уже знаете даты поездки и число гостей, добавьте их в пожелания.</p></div>
    <div className="stay-plan-card"><CallbackForm /></div>
  </section>;
}
