import React, {Component} from 'react';
import './PrepareQuestionsPage.scss';
import arrow from './oplata.png';
import Item from './Item/Item.jsx';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';

class PrepareQuestionsPage extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
			id: '',
			url: '',
			mas: [
			{
				id: 1,
				text: 'Чи заперечували ви свою вину на місці вчинення правопорушення?'
			},
			{
				id: 2,
				text: 'Чи був складений протокол?'
			},
			{
				id: 3,
				text: 'Чи ознайомив вас співробітник поліції з вашими правами та обов`язками?'
			},
			{
				id: 4,
				text: 'Чи запрошувались свідки під час складання протоколу?'
			},
			{
				id: 5,
				text: 'Чи зазначено у постанові назва приладу?'
			},
			{
				id: 6,
				text: 'Чи були надані докази, що пристроєм було заміряно швидкість саме вашого автомобіля?'
			},
			{
				id: 7,
				text: 'Чи були надані докази, що пристрій пройшов щорічну перевірку?'
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
										apply: -2,
										deny: -1
									},
									deny: {
										id:6,
										apply: -2,
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
										apply: -2,
										deny: -1
									},
									deny: {
										id:6,
										apply: -2,
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
								apply:-2,
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
										apply: -2,
										deny: -1
									},
									deny: {
										id:6,
										apply: -2,
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
										apply: -2,
										deny: -1
									},
									deny: {
										id:6,
										apply: -2,
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
								apply:-2,
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
	handleAdd = (item, bool, previd) => {
		let newA = this.state.chosed;
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
					console.log('saving');
				}
				if(item===-2) console.log('No rul');
			}	
        }
    }
	render(){
		return(
			<div className='PrepareQuestionsPage'>
				<h1>Cформувати позов</h1>
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
							<Item tree={this.state.curtree} item={this.state.mas[item.id-1]} chosed={this.state.chosed} id={item.id} add={this.handleAdd}/>
							</CSSTransition>				           	
						))
					}
				</TransitionGroup>
				<button>Продовжити<img src={arrow} alt="oplataimg"/></button>
			</div>
		)
	}
}

export default PrepareQuestionsPage;