function App() {
  return (
    <div className="App">
      <div class="hero-poz">
        <input type="text" class="lastText" disabled="true" />

        <div class="coin">
          <img
            src="img\5a364041411e44.8325067215135048332667.png"
            alt=""
            class="slide-top"
          />
        </div>
        <div class="box">
          <img
            src="img\kisspng-gunny-sack-money-bag-royalty-free-clip-art-purse-5a82aa40a80b74.6636353015185127046883.png"
            alt=""
            class="box"
          />
          <div class="coins">0</div>
        </div>
        <button type="button" class="btn-go">
          Start
        </button>
        <button type="button" class="btn-reset">
          Reset
        </button>

        <div class="timer">0</div>
        <input type="text" class="input-text" placeholder="Text pls" />
      </div>
      <div class="backdrop is-hidden">
        <div class="modal">
          <div>
            <svg class="modal-btn-ico" width="18" height="18">
              <use href="./symbol-defs.svg#icon-close"></use>
            </svg>
          </div>
          <div>
            <div class="modal-container">
              <img
                src="img\111.webp"
                alt="Avatar"
                width="70"
                height="70"
                class="avatar"
              />
              <h1 class="Progress"></h1>
            </div>
            <ul class="record-test">
              <li class="record-list"></li>

              <li class="record-list">
                <svg class="modal-btn-ico" width="18" height="18">
                  <use href="./symbol-defs.svg#icon-text_fields"></use>
                </svg>

                <p>Length Symbol:</p>
                <p class="length-count"></p>
              </li>
              <li class="record-list">
                <svg class="modal-btn-ico" width="18" height="18">
                  <use href="./symbol-defs.svg#icon-done"></use>
                </svg>

                <p>Done:</p>
                <p class="count-done"></p>
              </li>
              <li class="record-list">
                <svg class="modal-btn-ico" width="18" height="18">
                  <use href="./symbol-defs.svg#icon-clear" fill="red"></use>
                </svg>
                <p>Error:</p>

                <p class="error"></p>
                <button class="your-error">Your errors</button>
              </li>
              <li class="record-list">
                <svg class="modal-btn-ico" width="18" height="18">
                  <use href="./symbol-defs.svg#icon-stopwatch"></use>
                </svg>
                <p>Time:</p>
                <p class="timerCount"></p>
              </li>
            </ul>
          </div>
          <div class="modal-error is-hidden">
            <div class="modal-error__true-words">
              <p>Правильно</p>
              <p class="true-words"></p>
            </div>
            <div class="modal-error__false-words">
              <p>Невірно</p>
              <p class="false-words"></p>
            </div>
            <svg class="modal-btn-ico__error" width="18" height="18">
              <use
                href="./symbol-defs.svg#icon-clear"
                class="useModal"
                fill="black"
              ></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
