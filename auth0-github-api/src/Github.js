import React, { Component } from 'react';
import Profile from './Components/Profile';
import Search from './Components/Search';

const API='https://api.github.com/users'
class Github extends Component{
	constructor(props){
		super(props);
		
		this.state={
			username:'avinashbnaik',
			name:'',
			avatar:'',
			repos:'',
			followers:'',
			following:'',
			homeURL:'', 
			notFound:''
		};
	}
	
	getProfile(username){
	
		let finalURL=`${API}/${username}`;
		fetch(finalURL)
		.then((res) => res.json())
		.then((data) => {
			this.setState({
			username:data.login,
			name:data.name,
			avatar:data.avatar_url,
			repos:data.public_repos,
			followers:data.followers,
			following:data.following,
			homeURL:data.html_url, 
			notFound:data.message
			});
		})
		.catch((error)=>console.log('There was a proble in fetching data'))
	}
	
	componentDidMount(){
		this.getProfile(this.state.username);
	}
	
	render(){
		return(
			<div>
				<sections id="card">
					<Search  searchProfile={this.getProfile.bind(this)}/>
					<Profile userData={this.state}/>
				</sections>
			</div>
		);
	}
}
export default Github;