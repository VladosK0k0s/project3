import React from 'react';
import './Content.css';
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
	  	chosed3: ['','','','','','','','','','','','','','','','',''],
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
	  		'protocolSeries',
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
	  		protocolSeries: '',
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
	  		protocolSeries: '',
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
    	try {
    		const url = 'http://api.xn--80a2c.com:80/user/create';
    		//const url = 'http://34.77.232.179:4000/user/create';
	    	const response = fetch(url, {
		        method: 'POST', // *GET, POST, PUT, DELETE, etc.
		        mode: 'cors', // no-cors, cors, *same-origin
		        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		        credentials: 'same-origin', // include, *same-origin, omit
		        headers: {
		            'Content-Type': 'application/json',
		            //'Content-Type': 'application/x-www-form-urlencoded',
		        },
		        redirect: 'follow', // manual, *follow, error
		        referrer: 'no-referrer', // no-referrer, *client
		        body: JSON.stringify(this.state.mainObj),
		        //body: {main: this.state.mainObj}, // тип данных в body должен соответвовать значению заголовка "Content-Type"
		    });
		    response.then(
		    	res => {
		    	 res.text().then(text=>{
					setTimeout(this.setState({
				 		form: text
					}), 500);
		    	 })
		    },  rej =>{
				 throw new Error("o_O");
		    });
		    
	    } catch (error) {
			console.error('Ошибка:', error);
		}
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