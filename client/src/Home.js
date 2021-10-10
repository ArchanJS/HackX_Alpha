import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import "./Home.css"

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length - 1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div style={{ fontSize: "14px", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px" }}>
				<img className="img-fluid" src="https://i.postimg.cc/3Nc9wkbY/vcalpha-removebg-preview.png" alt="" />
				</div>

				<div>
					<h1 style={{ fontSize: "45px", color:"aqua" }}>Class Meeting</h1>
					<p style={{ fontWeight: "200",color:"aqua" }}>Alpha VC website that makes your online classes easier</p>
				</div>

				<div style={{
					background: "rgb(158, 255, 247)", width: "30%", height: "auto", padding: "20px", minWidth: "400px",borderRadius:"14px",textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="Enter meeting ID" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
			</div>
		)
	}
}

export default Home;