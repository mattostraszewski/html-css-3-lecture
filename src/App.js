import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isMobileMenuOpen: false,
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="logo-hold">
            <img
              alt="Logo"
              src="https://i.ya-webdesign.com/images/stack-of-boxes-png-8.png"
              className="logo-img"
            />
            <p className="logo-text">BOXES R US</p>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">Home</li>
              <li className="nav-list-item">About</li>
              <li className="nav-list-item">Contact</li>
            </ul>
          </nav>
          <nav className="mobile-nav">
            <img
              className="hamburger"
              src="https://img.icons8.com/pastel-glyph/2x/hamburger.png"
              alt="Hamburger"
              onClick={this.toggleMobileMenu}
            />
            <ul
              className={`mobile-nav-list ${
                this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null
                  // }`}           So the ternary we create is just saying that if we toggle the menu then it will create a new className is that right?
                  >
                  <li className="mobile-nav-list-item">Home</li>
                  <li className="mobile-nav-list-item">About</li>
                  <li className="mobile-nav-list-item">Contact</li>
            </ul>
          </nav>
        </header>
        <div className="boxes-hold">
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
        </div>
        <div className="boxes-hold">
          <div className="box box-4"></div>
          <div className="box box-5"></div>
          <div className="box box-6"></div>
        </div>
      </div>
    )
  }
}

export default App









// import React from 'react'
// import './App.css'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isMobileMenuOpen: false,
//     }
//   }

//   toggleMobileMenu = () => {
//     this.setState({
//       isMobileMenuOpen: !this.state.isMobileMenuOpen,
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="header">
//           <div className="logo-hold">
//             <img
//               alt="Logo"
//               src="https://i.ya-webdesign.com/images/stack-of-boxes-png-8.png"
//               className="logo-img"
//             />
//             <p className="logo-text">BOXES R US</p>
//           </div>
//           <nav className="nav">
//             <ul className="nav-list">
//               <li className="nav-list-item">Home</li>
//               <li className="nav-list-item">About</li>
//               <li className="nav-list-item">Contact</li>
//             </ul>
//           </nav>
//           <nav className="mobile-nav">
//             <img
//               className="hamburger"
//               src="https://img.icons8.com/pastel-glyph/2x/hamburger.png"
//               alt="Hamburger"
//               onClick={this.toggleMobileMenu}
//             />
//             <ul
//               className={`mobile-nav-list ${
//                 this.state.isMobileMenuOpen ? 'mobile-nav-list-open' : null
//               }`}
//             >
//               <li className="mobile-nav-list-item">Home</li>
//               <li className="mobile-nav-list-item">About</li>
//               <li className="mobile-nav-list-item">Contact</li>
//             </ul>
//           </nav>
//         </header>
//         <div
//           className={`boxes-hold ${
//             this.state.isMobileMenuOpen ? 'hide-boxes' : null
//           }`}
//         >
//           <div className="box box-1"></div>
//           <div className="box box-2"></div>
//           <div className="box box-3"></div>
//         </div>
//         <div
//           className={`boxes-hold ${
//             this.state.isMobileMenuOpen ? 'hide-boxes' : null
//           }`}
//         >
//           <div className="box box-4"></div>
//           <div className="box box-5"></div>
//           <div className="box box-6"></div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
