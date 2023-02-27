import React from 'react'

const Header = () => {

	const x= ()=>{
		alert("hello");
	}
  return (
    <div id='Header'>
        
	<div class="hero">
		<div  id= "Content" class="content">
			<h4>Hello, my name is</h4>
			<h1>Arnab<span> Singha</span></h1>
			<h3>I'am a Web Developer.</h3>
			<div class="newslatter">
					<input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
					<input type="submit" name="submit" value="Lets Start"/>
			</div>
			<div class="butto"> 
			<button onClick={x}>Onclick</button>
			</div>
		</div>
	</div>
</div>
  )
}

export default Header