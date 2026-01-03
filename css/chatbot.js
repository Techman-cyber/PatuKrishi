.chat-toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: none;
  font-size: 22px;
  cursor: pointer;
}

.chatbot-modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  justify-content: center;
  align-items: center;
}

.chat-window {
  background: white;
  width: 320px;
  height: 420px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background: var(--primary);
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.chat-input {
  display: flex;
}

.chat-input input {
  flex: 1;
  padding: 8px;
}

.chat-input button {
  background: var(--secondary);
  color: white;
  border: none;
  padding: 8px 12px;
}

.chat-msg.user {
  text-align: right;
  margin-bottom: 6px;
}

.chat-msg.bot {
  text-align: left;
  margin-bottom: 6px;
  color: green;
}
