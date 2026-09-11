'use client';
import { useState } from 'react';

export default function StayPlanner() {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  return <section className="stay-planner section" id="request" aria-labelledby="plan-title">
    <div><p className="eyebrow dark">Ваша поездка</p><h2 id="plan-title">Начните<br/>с удобных дат</h2><p>Укажите заезд, выезд и число гостей. Подготовьте детали для разговора с гостевым домом.</p><p className="stay-plan-note">По телефону уточните доступный номер, полную стоимость проживания, время заезда и условия отмены.</p></div>
    <div className="stay-plan-card"><form onSubmit={e=>{
      e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;
      const data=new FormData(form);const start=String(data.get('checkin'));const end=String(data.get('checkout'));
      const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());
      if(start<today.toISOString().slice(0,10)){setError('Выберите дату заезда сегодня или позже.');setMessage('');return;}
      const nights=Math.round((Date.parse(end+'T00:00:00Z')-Date.parse(start+'T00:00:00Z'))/86400000);
      if(nights<1){setError('Дата выезда должна быть позже даты заезда.');setMessage('');return;}
      setError('');setCopied(false);
      setMessage(`Здравствуйте! Хотим остановиться в «Университетской даче».\nЗаезд: ${start.split('-').reverse().join('.')}\nВыезд: ${end.split('-').reverse().join('.')}\nНочей: ${nights}\nГостей: ${data.get('guests')}${String(data.get('wishes')).trim()?'\nПожелания: '+String(data.get('wishes')).trim():''}\nПодскажите, пожалуйста, доступный номер, полную стоимость, время заезда и условия отмены.`);
    }} onInput={()=>{setMessage('');setCopied(false);setError('')}}>
      <div className="stay-plan-dates"><label>Заезд<input type="date" name="checkin" required/></label><label>Выезд<input type="date" name="checkout" required/></label></div>
      <label>Гостей<input type="number" name="guests" min="1" step="1" required placeholder="Например, 2"/></label>
      <label>Пожелания<textarea name="wishes" rows={3} maxLength={500} placeholder="Дети, поздний заезд, вопросы о парковке"/></label>
      <button className="button button-primary" type="submit">Подготовить запрос</button>
      <p className="stay-plan-note">Запрос составляется на вашем устройстве. Свободные номера и бронь подтверждает гостевой дом.</p>
    </form>
    {error&&<p role="alert" className="stay-plan-error">{error}</p>}
    {message&&<div className="stay-plan-result" aria-live="polite"><pre>{message}</pre><div className="stay-plan-actions"><a className="button button-primary" href="tel:+79112133243">Позвонить</a><button className="button" type="button" onClick={async()=>{try{await navigator.clipboard.writeText(message);setCopied(true)}catch{setError('Выделите текст выше и скопируйте вручную.')}}}>{copied?'Текст скопирован':'Скопировать детали'}</button></div></div>}
    </div>
  </section>;
}
