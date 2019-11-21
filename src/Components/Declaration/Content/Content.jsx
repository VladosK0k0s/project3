import React from 'react';
import {  CSSTransition,  TransitionGroup} from 'react-transition-group';
import './Content.css';
import Item from './Item/Item.jsx';
import Form2 from './Form2/Form2.jsx';
import Form3 from './Form3/Form3.jsx';
import LiqForm from './LiqForm/LiqForm.jsx';

class Content extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	hover: true,
	  	form: null,
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
	  		text: 'Чи були надані докази, що пристрій пройшов щорічну перевірку?'
	  	}],
	  	chosed: [{id:1, b:null}],
	  	chosed2: [false,false,false,false,false,false,false,false,false],
	  	chosed3: ['','','','','','','','','','','','','','','',''],
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
	  		'protocolBoolean',
	  		'certificates',
	  		'policemanFullNameBoolean',
	  		'videoRecorder',
	  		'personalDatA',
	  		'rozgliaduDate',
	  		'coupe122',
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
	  		'carSpeed',
	  		'defaultSpeed',
	  		'postanovaDate',
	  		'postanovaTime'
	  	],
	  	form1Obj:{
	  		zaperechuvali: null,
	  		protocol: null,
	  		oznayomivPoliceman: null,
	  		svidki: null,
	  		priladNameUPostanovi: null,
	  		priladName: null,
	  		speedProofs: null,
	  		qualityProofs: null
	  	},
	  	form2Obj: {
	  		protocolBoolean: false,
	  		certificates: false,
	  		policemanFullNameBoolean: false,
	  		videoRecorder: false,
	  		personalDatA: false,
	  		rozgliaduDate: false,
	  		coupe122: false,
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
	  		defaultSpeed: '',
	  		postanovaDate: '',
	  		postanovaTime: ''	  		
	  	},
	  	mainObj:{
	  		zaperechuvali: null,
	  		protocol: null,
	  		oznayomivPoliceman: null,
	  		svidki: null,
	  		priladNameUPostanovi: null,
	  		priladName: null,
	  		speedProofs: null,
	  		qualityProofs: null,
	  		protocolBoolean: false,
	  		certificates: false,
	  		policemanFullNameBoolean: false,
	  		videoRecorder: false,
	  		personalDatA: false,
	  		rozgliaduDate: false,
	  		coupe122: false,
	  		handWritten: false,
	  		postanovaVidRuki: false,
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
	  		defaultSpeed: '',
	  		postanovaDate: '',
	  		postanovaTime: ''	
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
	handleAdd(item, bool, previd) {
		let newA = this.state.chosed;
		if(!newA.find(it => {return it.id===item.id})){
			newA[newA.length-1].b = bool;
			if(typeof item == "object"){
				let newObj = this.state.mainObj;
				newObj[this.state.form1Names[previd-1]] = bool;
				newA.push({id: item.id, b:null});
	        	this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		mainObj: newObj
	        	});
			}
			else{
				let newObj = this.state.mainObj;
				newObj[this.state.form1Names[previd-1]] = bool;
				this.setState({
	        		chosed: newA,
	        		curtree: item,
	        		mainObj: newObj
	        	});
				if(item===-1) {
					console.log('saving');
				}
				if(item===-2) console.log('No rul');
			}	
        }
    }
    handleSecondForm(chosed, id){
    	this.setState({
			chosed2: chosed
    	});
    	let newObj = this.state.mainObj;
    	newObj[this.state.form2Names[id]] = chosed[id];
		this.setState({
			mainObj: newObj
		})
    }
    handleThirdForm(chosed, id){
    	this.setState({
			chosed3: chosed
    	})
    	let newObj = this.state.mainObj;
    	newObj[this.state.form3Names[id]] = chosed[id];
		this.setState({
			mainObj: newObj
		})
    }
    async Show(event){
    	console.log(this.state.mainObj);
    	let xhr = new XMLHttpRequest();
    	xhr.open('POST', 'http://34.77.232.179:4000/user/create');
    	xhr.timeout = 2000;
    	xhr.ontimeout = () =>{
    		xhr.abort();
    		console.log('Запит Завершено, час сплинув');
    	}
    	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    	xhr.onreadystatechange = () =>{
			//console.log(xhr.responseText);
			setTimeout(this.setState({
				form: xhr.responseText
			}), 500);
    	}
    	xhr.send(this.state.mainObj);
    	console.log(xhr.response);
    	event.preventDefault();
    }
	render(){
		let r = /name="data" value="(.*?)"/;
		let r2 = /name="signature" value="(.*?)"/;
		var myArray1 = r.exec(this.state.form);
		var myArray2 = r2.exec(this.state.form);
		let firstval = myArray1 ? myArray1[1]: null;
		let secondval = myArray2 ? myArray2[1]: null;
		return(
			<div className='Content'>
				<h1>Оформити позов</h1>
				<form onSubmit = {(event)=>this.Show(event)}>
					{/*<TransitionGroup className='qa'>
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
	               <Form2 chosed={this.state.chosed2} handleSecondForm={this.handleSecondForm}/>*/}
	               <Form3 data={this.state.chosed3} handleThirdForm={this.handleThirdForm}/>
	               <button>Send</button>	
               </form>
               <div>
				<LiqForm firstval={firstval} secondval={secondval}/>
               </div>
			</div>
		)
	}
}

export default Content;