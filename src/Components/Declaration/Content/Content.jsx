import React from 'react';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import './Content.css';
import Item from './Item/Item.jsx';
import Form2 from './Form2/Form2.jsx';
import Form3 from './Form3/Form3.jsx';


class Content extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	hover: true,
	  	mas: [{
	  		id: 1,
	  		text: 'Чи заперечували ви свою вину на місці вчинення правопорушення?'
	  	},
	  	{
	  		id: 2,
	  		text: 'Чи був складений протокол?'
	  	},
	  	{
	  		id: 3,
	  		text: 'Чи ознайомив вас поліцейський з вашими правами та обов`язками?'
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
	  		text: 'Яка назва приладу, який зафіксовано?'
	  	},
	  	{
	  		id: 7,
	  		text: 'Чи були надані докази, що пристроєм було заміряно швидкість саме вашого автомобіля?'
	  	},
	  	{
	  		id: 8,
	  		text: 'Чи були надані докази, що пристрій пройшов щорsчну перевірку?'
	  	}],
	  	chosed: [{id:1, b:null}],
	  	chosed2: [false,false,false,false,false,false,false,false,false],
	  	chosed3: ['','','','','','','','','','','','',''],
	  	form1Names:[
	  		'zaperechuvali',
	  		'protocol',
	  		'oznayomivPoliceman',
	  		'svidki',
	  		'priladNameUPostanovi',
	  		'priladName',
	  		'speedProofs',
	  		'qualityProofs'
	  	],
	  	form2Names:[
	  		'protocol',
	  		'certificates',
	  		'policemanFullName',
	  		'videoRecorder',
	  		'personalDatA',
	  		'rozgliaduDate',
	  		'122COUPE',
	  		'handWritten',
	  		'postanovaVidRuki'
	  	],
	  	form3Names:[
	  		'fullName',
	  		'IPN',
	  		'clientAdress',
	  		'email',
	  		'tel',
	  		'vidpovidachAdress',
	  		'policemanFullName',
	  		'instituteName',
	  		'postanovaNumber',
	  		'carBrand',
	  		'carNumber',
	  		'porusheniaAdress',
	  		'carSpeed'
	  	],
	  	form1Obj:{
	  		zaperechuvali: null,
	  		protocol: null,
	  		oznayomivPoliceman: null,
	  		svidki: null,
	  		priladNameUPostanovi: null,
	  		priladName: null,
	  		speedProofs: null,
	  		qualityProofs: null,
	  	},
	  	form2Obj: {
	  		protocol: false,
	  		certificates: false,
	  		policemanFullName: false,
	  		videoRecorder: false,
	  		personalDatA: false,
	  		rozgliaduDate: false,
	  		COUPE122: false,
	  		handWritten: false,
	  		postanovaVidRuki: false
	  	},
	  	form3Obj: {
	  		fullName: '',
	  		IPN: '',
	  		clientAdress: '',
	  		email: '',
	  		tel: '',
	  		vidpovidachAdress: '',
	  		policemanFullName: '',
	  		instituteName: '',
	  		postanovaNumber: '',
	  		carBrand: '',
	  		carNumber: '',
	  		porusheniaAdress: '',
	  		carSpeed: '',	  		
	  	},
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
	  							id:6,
	  							apply:{
	  								id:8,
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
	  							deny:-1
	  						},
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1

	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					}
	  				},
	  				deny:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:-1
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
  								id:8,
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
  							deny:-1
  						},
  						deny:{
  							id:7,
  							apply:-1,
  							deny:-1

  						}
	  				},
	  				deny:{
	  					id:5,
	  					apply:{
	  						id:6,
  							apply:{
  								id:8,
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
  							deny:-1
	  					},
	  					deny:{
	  						id:7,
  							apply:-1,
  							deny:-1
	  					}
	  				}
	  			}
	  		},
	  		deny:{
	  			id:3,
	  			apply:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			},
	  			deny:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			}
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
	  							id:6,
	  							apply:{
	  								id:8,
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
	  							deny:-1
	  						},
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1

	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					}
	  				},
	  				deny:{
	  					id:3,
	  					apply:{
	  						id:5,
	  						apply:-1,
	  						deny:{
	  							id:7,
	  							apply:-1,
	  							deny:-1
	  						}
	  					},
	  					deny:{
	  						id:5,
	  						apply:-1,
	  						deny:-1
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
  								id:8,
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
  							deny:-1
  						},
  						deny:{
  							id:7,
  							apply:-1,
  							deny:-1

  						}
	  				},
	  				deny:{
	  					id:5,
	  					apply:{
	  						id:6,
  							apply:{
  								id:8,
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
  							deny:-1
	  					},
	  					deny:{
	  						id:7,
  							apply:-1,
  							deny:-1
	  					}
	  				}
	  			}
	  		},
	  		deny:{
	  			id:3,
	  			apply:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			},
	  			deny:{
	  				id:5,
	  				apply:-1,
	  				deny:{
	  					id:7,
	  					apply:-1,
	  					deny:-1
	  				}
	  			}
	  		}
	  	}
	  };
	  this.handleAdd = this.handleAdd.bind(this);
	  this.handleSecondForm = this.handleSecondForm.bind(this);
	  this.handleThirdForm = this.handleThirdForm.bind(this);
	  this.Show = this.Show.bind(this);
	}
	handleAdd(item, bool) {
		let newA = this.state.chosed;
		if(!newA.find(it => {return it.id===item.id})){
			newA[newA.length-1].b = bool;
			if(typeof item == "object"){
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[item.id-1]] = bool;
				newA.push({id: item.id, b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
			}
			else{
				let newObj = this.state.form1Obj;
				newObj[this.state.form1Names[item.id-1]] = bool;
				this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		form1Obj: newObj
	        	});
				if(item===-1) {
					console.log('sending');
				}
				if(item===-2) console.log('No rul');
			}	
        }
    }
    handleSecondForm(chosed){
    	this.setState({
			chosed2: chosed
    	});
    	let newObj = {};
		this.state.form2Names.map((el,i)=>{
			newObj[el]=this.state.chosed2[i];
		})
		this.setState({
			form2Obj: newObj
		})
    }
    handleThirdForm(chosed){
    	this.setState({
			chosed3: chosed
    	})
    	let newObj = {};
		this.state.form3Names.map((el,i)=>{
			newObj[el]=this.state.chosed3[i];
		})
		this.setState({
			form3Obj: newObj
		})
    }
    async Show(event){
    	let xhr = new XMLHttpRequest();
    	xhr.open('POST', 'https://77eab8b9-9e1e-42b1-adda-8d5dfc824d2e.mock.pstmn.io', true);
    	xhr.setRequestHeader('Content-Type', 'multipart/form-data;');
    	xhr.send(JSON.stringify({obj1: this.state.form1Obj, obj2: this.state.form2Obj, obj3: this.state.form3Obj}));
    // 	let response = await fetch('http://localhost:4000',{
				// method: 'POST',
				// body: JSON.stringify({obj1: this.state.form1Obj, obj2: this.state.form2Obj, pbj3: this.state.form3Obj})
    // 		});
    // 	let result = await response.json();
    	console.log(this.state.form1Obj, this.state.form2Obj, this.state.form3Obj);
    	event.preventDefault();
    }
	render(){
		return(
			<div className='Content'>
				<h1>Оформити позов</h1>
				<form onSubmit = {(event)=>this.Show(event)}>
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
                    		<Item tree={this.state.curtree} item={this.state.mas[item.id-1]} chosed={this.state.chosed} id={i+1} add={this.handleAdd}/>
                    		</CSSTransition>				           	
				        ))
                    }
                </TransitionGroup>
               <Form2 chosed={this.state.chosed2} handleSecondForm={this.handleSecondForm}/>
               <Form3 data={this.state.chosed3} handleThirdForm={this.handleThirdForm}/>
               <button>Send</button>	
               </form>
			</div>
		)
	}
}

export default Content;