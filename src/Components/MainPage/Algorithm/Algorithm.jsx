import React from 'react';
import './Algorithm.css';

const Algorithm = () =>{
	return(
		<div id='algorithm' className='Algorithm'>
			<h3>Простий алгоритм дій</h3>
			<div className='steps'>
				<div>
					<h4>1</h4>
					<p>крок перший</p>
					<span>Відповідаєте на кілька простих запитань у формі.</span>
				</div>
				<div>
					<h4>2</h4>
					<p>крок другий</p>
					<span>Згідно ваших відповідей розраховується шкала успішності 
						оспорювання даного штрафу.
					</span>
				</div>
				<div>
					<h4>3</h4>
					<p>крок третій</p>
					<span>Вирішуєте оспорювати.</span>
				</div>
				<div>
					<h4>4</h4>
					<p>крок четвертий</p>
					<span>Оплачуєте наші послуги, які коштують як чашечка кави.</span>
				</div>
				<div>
					<h4>5</h4>
					<p>крок п'ятий</p>
					<span>Вводите дані, вказані в протоколі порушення.</span>
				</div>
				<div>
					<h4>6</h4>
					<p>крок шостий</p>
					<span>Отримуєте ГОТОВУ позовну заяву.</span>
				</div>
				<div>
					<h4>7</h4>
					<p>крок сьомий</p>
					<span>Подаєте в суд.</span>
				</div>
			</div>
		</div>
	)
}

export default Algorithm;