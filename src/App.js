import logo from './logo.svg';
import './App.css';
import './normal.css'


function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='side-menu-button'>
          <span>
            +
          </span>
          New chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'>
                Me
              </div>
              <div className='message'>
                Hello World
              </div>
            </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea rows="1" className='chat-input-textarea' placeholder='Type your message here'></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
