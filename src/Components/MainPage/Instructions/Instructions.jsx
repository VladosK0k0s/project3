import React from 'react';
import './Instructions.css';


let Instr = [{
	p: 'Перший крок',
	span: 'Ви отримали на електронну пошту позовну заяву з вашими даними.'
},{
	p: 'Другий крок',
	span: 'Роздрукуйте саму заяву та вказані додатки в 3-х примірниках.'
},{
	p: 'Третій крок',
	span: 'Підпишіть кожен аркуш — ПІБ, дата, підпис.'
},{
	p: 'Четвертий крок',
	span: `Відправляйте всі підписані документи листом, на адресу суду, вказаного в шапці позовної заяви. 
			Це буде суд за місцем вашої прописки чи місцем перебування працівника поліції, що склав протокол (відповідач). 
			Також ви можете особисто подати документи в канцелярію суду.`
},{
	p: 'П`ятий крок',
	span: `Розгляд справи відбудеться не пізніше, ніж два місяці з дня відкриття провадження. 
			Рішення по справі ви отримаєте поштою, на свою адресу, яку ви вказали в позовній заяві.`
},{
	p: 'Шостий крок',
	span: `В рішенні, яким задоволено ваш позов, буде вказано, коли воно набирає законної сили (10 днів після проголошення). 
			Як тільки спливе цей термін і якщо друга сторона не подала апеляцію — ви офіційно ВИГРАЛИ СУД І НЕ БУДЕТЕ ПЛАТИТИ ШТРАФ!`
}]


const Instructions = () =>{
	return(
		<div id='instructions' className='Instructions'>
 			<h3>Покрокова інструкція</h3>
 			<div className='steps'>
	 			{
	 				Instr.map((el)=>{
	 					return(
	 						<div key = {Instr.indexOf(el)+1}>
	 							<h4>{Instr.indexOf(el)+1}</h4>
	 							<p>{el.p}</p>
	 							<span>{el.span}</span>
	 						</div>
	 					)
	 				})
	 			}
 				
 			</div>
		</div>
	)
}

export default Instructions;