import React, {Component} from 'react';
import './PrepareQuestionsPage.scss';
import arrow from './oplata.png';
import Item from './Item/Item.jsx';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import { NavLink, Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

class PrepareQuestionsPage extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			id: '',
			url: '',
			sendObj: '',
			alert: false,
			mas: [
			{
				id: 1,
				text: 'Чи заперечували Ви свою вину на місці вчинення правопорушення?'
			},
			{
				id: 2,
				text: 'Чи був складений протокол?'
			},
			{
				id: 3,
				text: 'Чи ознайомив Вас співробітник поліції із Вашими правами та обов’язками?'
			},
			{
				id: 4,
				text: 'Чи запрошувались свідки під час складання протоколу?'
			},
			{
				id: 5,
				text: 'Чи зазначена в постанові назва приладу?'
			},
			{
				id: 6,
				text: 'Чи були представлені докази, що пристроєм будо заміряно швидкість саме Вашого авто?'
			},
			{
				id: 7,
				text: 'Чи були представлені докази щорічної перевірки та сертифікації приладу вимірювання швидкості?'
			}],
			form1Names:
			[
				'isCustomerDenied',
				'isProtocolCreated',
				'isCustomerAcknowledgedWithLaw',
				'isWitnessAttend',
				'isNameOfDeviceExists',
				'isEvidenceOfSpeedShownToCustomer',
				'isCertificatsOfDeviceShownToCustomer'
			],
			form1Obj:{
				isCustomerDenied: null,
				isProtocolCreated: null,
				isCustomerAcknowledgedWithLaw: null,
				isWitnessAttend: null,
				isNameOfDeviceExists: null,
				isEvidenceOfSpeedShownToCustomer: null,
				isCertificatsOfDeviceShownToCustomer: null
			},
			chosed: [{id:1, b:null}],
			tree:{
				id:1,
				apply:{
					id:2,
					apply:{
						id:4,
						apply:{
							id:3,
							apply:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							},
							deny:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							}
						},
						deny:{
							id:3,
							apply:{
								id:5,
								apply:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
								deny:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
							},
							deny:{
								id:5,
								apply:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
								deny:{
										id:6,
										apply:{
											id:7,
											apply:-1,
											deny:-1
										},
										deny:{
											id:7,
											apply:-1,
											deny:-1
										}
									},
							},
						}
					},
					deny:{
						id:3,
						apply:{
							id:5,
							apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
							deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						},
						deny:{
							id:5,
							apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
							deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						},
					}
				},
				deny:{
					id:3,
					apply:{
						id:5,
						apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
						deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					},
					deny:{
						id:5,
						apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
						deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					},
				}
			},
			curtree:{
				id:1,
				apply:{
					id:2,
					apply:{
						id:4,
						apply:{
							id:3,
							apply:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							},
							deny:{
								id:5,
								apply:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								},
								deny:{
									id:7,
									apply:{
										id:6,
										apply: -1,
										deny: -1
									},
									deny: {
										id:6,
										apply: -1,
										deny: -1
									}
								}
							}
						},
						deny:{
							id:3,
							apply:{
								id:5,
								apply:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
								deny:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
							},
							deny:{
								id:5,
								apply:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
								deny:{
									id:6,
									apply:{
										id:7,
										apply:-1,
										deny:-1
									},
									deny:{
										id:7,
										apply:-1,
										deny:-1
									}
								},
							},
						}
					},
					deny:{
					id:3,
					apply:{
						id:5,
						apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
					},
					deny:{
						id:5,
						apply:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
						deny:{
								id:6,
								apply:{
									id:7,
									apply:-1,
									deny:-1
								},
								deny:{
									id:7,
									apply:-1,
									deny:-1
								}
							},
					},
				}
				},
				deny:{
				id:3,
				apply:{
					id:5,
					apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
				},
				deny:{
					id:5,
					apply:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
					deny:{
							id:6,
							apply:{
								id:7,
								apply:-1,
								deny:-1
							},
							deny:{
								id:7,
								apply:-1,
								deny:-1
							}
						},
				},
			}
			},
	  };
	}
	handleRem = (item, bool, previd) => {
		this.setState({sendObj: ''});
		//console.log(previd);
		// console.log(item);
		// //console.log(this.state.chosed);
		// console.log(this.state.chosed.findIndex((el)=>el.id===previd));
		let newarr = this.state.chosed.slice(0,this.state.chosed.findIndex((el)=>el.id===previd)+1);
		//console.log(newarr);
		newarr[newarr.length-1].b = bool;
		let newitem = this.state.tree;
		newarr.forEach((el)=>{
			let text = el.b ? 'apply' : 'deny';
			newitem = newitem[text];
		});
		//console.log(newarr);
		// this.setState({chosed: newarr, curtree: newitem});
		let newA = newarr;
		// console.log(newitem);
		// console.log(this.state.curtree);
		if(!newA.find(it => {return it.id===newitem.id})){
			newA[newA.length-1].b = bool;
			if(typeof newitem == "object"){
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				newA.push({id: newitem.id, b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: newitem,
	        		form1Obj: newObj
	        	});
			}
			else{
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				this.setState({
	        		chosed: newA,
	        		curtree: newitem,
	        		form1Obj: newObj
	        	});
				if(newitem===-1) {
					this.prepareToSend()
					this.setState({sorry: false})
				}
				if(newitem===-2) this.setState({sorry: true});
			}	
        }
	}
	handleAdd = (item, bool, previd) => {
		let newA = this.state.chosed;
		//console.log(newA, item);
		if(!newA.find(it => {return it.id===item.id})){
			newA[newA.length-1].b = bool;
			if(typeof item == "object"){
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				newA.push({id: item.id, b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
			}
			else{
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[previd-1]] = bool;
				this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
				if(item===-1) {
					this.prepareToSend()
					this.setState({sorry: false})
				}
				if(item===-2) this.setState({sorry: true});
			}	
        }
	}
	reject = () =>{
		console.log('Sorry');
	}
	prepareToSend = () =>{
		let sendObj = {};
		this.state.form1Obj.isProtocolCreated === false ? sendObj.isProtocolCreated = true : sendObj.isProtocolCreated = false;
		this.state.form1Obj.isWitnessAttend === false ? sendObj.isWitnessAttend = true : sendObj.isWitnessAttend = false;
		this.state.form1Obj.isCustomerAcknowledgedWithLaw === false ? sendObj.isCustomerAcknowledgedWithLaw = true : sendObj.isCustomerAcknowledgedWithLaw = false;
		this.state.form1Obj.isNameOfDeviceExists === false ? sendObj.isNameOfDeviceExists = true : sendObj.isNameOfDeviceExists = false;
		this.state.form1Obj.isCertificatsOfDeviceShownToCustomer === false ? sendObj.isCertificatsOfDeviceShownToCustomer = true : sendObj.isCertificatsOfDeviceShownToCustomer = false;
		if(this.state.form1Obj.isEvidenceOfSpeedShownToCustomer === false) sendObj.isEvidenceOfSpeedShownToCustomer = false;
		else if(this.state.form1Obj.isEvidenceOfSpeedShownToCustomer === true) sendObj.isEvidenceOfSpeedShownToCustomer = true;
		else sendObj.isEvidenceOfSpeedShownToCustomer = null;
		this.setState({sendObj, alert: false}, localStorage.setItem('sendObj', JSON.stringify(sendObj)));
	}
	Show = (e) => {
		e.preventDefault();
		console.log(this.state.sendObj);
	}
	setalert = (e) =>{
		e.preventDefault();
		this.setState({alert: true})
	}
	render(){
		return(
			<div className='PrepareQuestionsPage'>
				<h1>Cформувати позов</h1>
				<form onSubmit={this.setalert}>
					<TransitionGroup className='qa'>
						{
							this.state.chosed.map((item, i) => (
								<CSSTransition 
									key={i}
									in={this.state.hover}
									appear={true}
									timeout={600}
									classNames='fade'
								>
								<Item tree={this.state.curtree} item={this.state.mas[item.id-1]} chosed={this.state.chosed} rem={this.handleRem} id={item.id} add={this.handleAdd}/>
								</CSSTransition>				           	
							))
						}
					</TransitionGroup>
					{!this.state.sendObj
						?	<>
								{!this.state.alert
									? <button>Продовжити<img src={arrow} onClick={this.setalert} alt="oplataimg"/></button>
									: <Alert style={{width: '250px', textAlign: 'center', display: 'block', margin: 'auto'}} variant='danger'>Заповніть усі відповіді! </Alert>
								}
							</>
						: 	<NavLink to = '/declaration'>
								<button>Продовжити<img src={arrow} alt="oplataimg"/></button>
							</NavLink>
					}
					
				</form>
			</div>
		)
	}
}

export default PrepareQuestionsPage;