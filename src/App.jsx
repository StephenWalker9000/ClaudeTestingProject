import './App.css';

const WELCOME_LETTERS = ['W','E','L','C','O','M','E'];

// Generate bulb positions around an oval
function OvalBulbs({ count = 36 }) {
  const bulbs = [];
  for (let i = 0; i < count; i++) {
    // offset phase so bulbs alternate in groups of 3
    const phase = i % 3;
    bulbs.push(
      <div
        key={i}
        className="bulb"
        style={{
          '--index': i,
          '--phase': phase,
          '--total': count,
        }}
      />
    );
  }
  return <div className="bulb-ring">{bulbs}</div>;
}

function App() {
  return (
    <div className="page">
      <div className="sign-assembly">

        {/* Blue rectangle + starburst */}
        <div className="top-post">
          <div className="starburst">
            <div className="starburst-inner" />
          </div>
        </div>

        {/* Main sign body */}
        <div className="sign-body">
          <div className="sign-border">
            <OvalBulbs count={44} />
            <div className="sign-inner">

              {/* WELCOME letter circles */}
              <div className="welcome-row">
                {WELCOME_LETTERS.map((letter, i) => (
                  <div className="letter-circle" key={i}>
                    <span className="letter-circle-text">{letter}</span>
                  </div>
                ))}
              </div>

              {/* "to Fabulous" */}
              <div className="to-fabulous-row">
                <span className="to-text">TO</span>
                <span className="fabulous-text">Fabulous</span>
              </div>

              {/* City name */}
              <div className="city-name">SYKESVILLE</div>

              {/* Nevada */}
              <div className="nevada-text">NEVADA</div>

            </div>
          </div>
        </div>

        {/* Support poles */}
        <div className="poles">
          <div className="pole" />
          <div className="pole" />
        </div>

      </div>
    </div>
  );
}

export default App;
