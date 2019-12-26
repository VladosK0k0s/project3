import React from "react";
/* global google */


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mas: [
        {
        "id":"1",
        "adress":"21001, м. Вінниця, вул. Брацлавська, 14",
        "oblast":"Вінницька область",
        "nazva":"Вінницький окружний адміністративний суд"
        },
        
        {
        "id":"2",
        "adress":"43025, м. Луцьк, вул. Словацького, 3",
        "oblast":"Волинська область",
        "nazva":"Волинський окружний адміністративний суд"
        },
        
        {
        "id":"3",
        "adress":"49089, м. Дніпро, вул. Академіка Янгеля, 4",
        "oblast":"Дніпропетровська область",
        "nazva":"Дніпропетровський окружний адміністративний суд"
        },
        
        {
        "id":"4",
        "adress":"84122, м. Слов'янськ, Донецька область, вул. Добровольського, 1",
        "oblast":"Донецька область",
        "nazva":"Донецький окружний адміністративний суд"
        },
        
        {
        "id":"4",
        "adress":"10014 м. Житомир вул. Мала Бердичівська, 23, вул. Мала Бердичівська, 17",
        "oblast":"Житомирська область",
        "nazva":"Житомирський окружний адміністративний суд"
        },
        
        {
        "id":"6",
        "adress":"88017, м. Ужгород, вул. Загорська, 30",
        "oblast":"Закарпатська область",
        "nazva":"Закарпатський окружний адміністративний суд"
        },
        
        {
        "id":"7",
        "adress":"69041 м. Запоріжжя, вул. Сергія Синенка, буд. 65-В",
        "oblast":"Запорізька область",
        "nazva":"Запорізький окружний адміністративний суд"
        },
        
        {
        "id":"8",
        "adress":"76018, м. Івано-Франківськ, вул. Незалежності, 46",
        "oblast":"Івано-Франківська область",
        "nazva":"Івано-Франківський окружний адміністративний суд"
        },
        
        {
        "id":"9",
        "adress":"1133, м. Київ, бул. Лесі Українки, 26",
        "oblast":"Київська область",
        "nazva":"Київський окружний адміністративний суд"
        },
        
        {
        "id":"10",
        "adress":"25006, м. Кіровоград, вул. Велика Перспективна, 40",
        "oblast":"Кіровоградська область",
        "nazva":"Кіровоградський окружний адміністративний суд"
        },
        
        {
        "id":"11",
        "adress":"93411, м.Сєвєродонецьк, просп. Космонавтів, 18",
        "oblast":"Луганська область",
        "nazva":"Луганський окружний адміністративний суд"
        },
        
        {
        "id":"12",
        "adress":"79018, м. Львів, вул. Чоловського, 2",
        "oblast":"Львівська область",
        "nazva":"Львівський окружний адміністративний суд"
        },
        
        {
        "id":"13",
        "adress":"54001 м. Миколаїв, вул.Декабристів, буд. 41/10",
        "oblast":"Миколаївська область",
        "nazva":"Миколаївський окружний адміністративний суд"
        },
        
        {
        "id":"14",
        "adress":"65062, м. Одеса, вул. Фонтанська дорога, 14",
        "oblast":"Одеська область",
        "nazva":"Одеський окружний адміністративний суд"
        },
        
        {
        "id":"15",
        "adress":"36039, м. Полтава, вул. Пушкарівська, 9/26",
        "oblast":"Полтавська область",
        "nazva":"Полтавський окружний адміністративний суд"
        },
        
        {
        "id":"16",
        "adress":"33028, м. Рівне, вул. 16 Липня, 87",
        "oblast":"Рівненська область",
        "nazva":"Рівненський окружний адміністративний суд"
        },
        
        {
        "id":"17",
        "adress":"40021, м. Суми, вул. Герасима Кондратьєва, 159",
        "oblast":"Сумська область",
        "nazva":"Сумський окружний адміністративний суд"
        },
        
        {
        "id":"18",
        "adress":"46000, м. Тернопіль, вул. Кн. Острозького, 20",
        "oblast":"Тернопільська область",
        "nazva":"Тернопільський окружний адміністративний суд"
        },
        
        {
        "id":"19",
        "adress":"61004, м. Харків, вул. Мар'їнська, 18-Б-3",
        "oblast":"Харківська область",
        "nazva":"Харківський окружний адміністративний суд"
        },
        
        {
        "id":"20",
        "adress":"73027, м. Херсон, вул. Філатова, 29",
        "oblast":"Херсонська область",
        "nazva":"Херсонський окружний адміністративний суд"
        },
        
        {
        "id":"21",
        "adress":"29009, м. Хмельницький, вул. Козацька, 42",
        "oblast":"Хмельницька область",
        "nazva":"Хмельницький окружний адміністративний суд"
        },
        
        {
        "id":"22",
        "adress":"18002, м. Черкаси, бульвар Шевченка, 117",
        "oblast":"Черкаська область",
        "nazva":"Черкаський окружний адміністративний суд"
        },
        
        {
        "id":"23",
        "adress":"58000, м. Чернівці, вул. Садова, 1-і",
        "oblast":"Чернівецька область",
        "nazva":"Чернівецький окружний адміністративний суд"
        },
        
        {
        "id":"24",
        "adress":"14000, м.Чернігів, вул. Кирпоноса, 16",
        "oblast":"Чернігівська область",
        "nazva":"Чернігівський окружний адміністративний суд"
        },
        
        {
        "id":"25",
        "adress":"01051, м. Київ, вул. Болбочана Петра, 8, корпус 1",
        "oblast":"місто Київ",
        "nazva":"окружний адміністративний суд міста Києва"
        } 
        ]
    }
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    if(place.address_components === undefined) return;
    if(place.address_components[place.address_components.length - 3] === undefined) return;
    const str = place.address_components[place.address_components.length - 3].long_name;
    const obj = this.state.mas.find(el => el.oblast == str);
    console.log(obj);
    const sendstr = obj.nazva + ' ' + obj.adress;
    const sendobj = {
      clientAddress: place.formatted_address,
      sud: sendstr
    }
    this.props.onChange(sendobj, 2);
  }



  render() {
    return (
        <input 
          ref={this.autocompleteInput}  
          id="autocomplete" 
          placeholder=""
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          >
            
        </input>
    );
  }
}

export default Search;