new Vue({
				el:'#app',
				data:{
					isGuy:false,
					guyness:0,
					width:0,
					key:0,
					trying:false,
					succeeded:false,
					tryMessages:[
						{text:'Worker harder, man'},
						{text:'Try harder'},
						{text:'You can make it happen'},
						{text:'I know you can hep me out'},
						{text:'Try harder'}
					],
					successMessages:[
						{text:'Yay, you did it'},
						{text:'Thank you very much'},
						{text:'I am very grateful'}
					]
				},
				methods:{
					helpWearSpectacles(){
						if(this.guyness !== 100){
							this.guyness += 10
							this.width += 30
							this.guyness === 100 ? this.isGuy = true : false	
						}
						this.key++
						if(this.key === 10){
							this.trying = !this.trying
							this.succeeded = !this.succeeded
						}
						if(this.key === 1){
							this.trying = true
						}

					},
					reset(){
						this.guyness = 0;
						this.isGuy = false;
						this.width = 0
						this.trying = false
						this.succeeded = false
					}
				}
			})