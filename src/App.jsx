import './App.css';

const WELCOME_LETTERS = ['W','E','L','C','O','M','E'];

function App() {
  return (
    <div className="page">
      <div className="sign-assembly">

        {/* Blue rectangle + red starburst at top */}
        <div className="top-post">
          <div className="starburst">
            <div className="starburst-inner" />
          </div>
        </div>

        {/* Main sign body */}
        <div className="sign-body">
          <div className="sign-border">
            <div className="sign-inner">

              {/* WELCOME letter circles */}
              <div className="welcome-row">
                {WELCOME_LETTERS.map((letter, i) => (
                  <div className="letter-circle" key={i}>
                    <span className="letter-circle-text">{letter}</span>
                  </div>
                ))}
              </div>

              {/* "to Fabulous" line */}
              <div className="to-fabulous-row">
                <span className="to-text">TO</span>
                <span className="fabulous-text">Fabulous</span>
              </div>

              {/* Main city name */}
              <div className="city-name">SYKESVILLE</div>

              {/* Nevada */}
              <div className="nevada-text">NEVADA</div>

            </div>
          </div>
        </div>

        {/* Blue support poles */}
        <div className="poles">
          <div className="pole" />
          <div className="pole" />
        </div>

      </div>
    </div>
  );
}

export default App;
