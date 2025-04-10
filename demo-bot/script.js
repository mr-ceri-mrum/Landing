document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatMessages = document.getElementById('chatMessages');
    const emptyState = document.getElementById('emptyState');
    const messageForm = document.getElementById('messageForm');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const startDemoBtn = document.getElementById('startDemoBtn');
    const replayDemoBtn = document.getElementById('replayDemoBtn');
    
    // API URL
    const API_URL = 'https://n8n.bogdanna.com/webhook/79b905f5-ce6d-4cab-bcef-8d7b2f643f1d';
    
    // Session ID
    let sessionId = localStorage.getItem('chatSessionId');
    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem('chatSessionId', sessionId);
    }
    
    // App state
    let demoStarted = false;
    let demoFinished = false;
    
    // Demo messages (same as in your React component)
    const demoMessages = [
        {
            sender: 'bot',
            text: 'Здравствуйте! Я AI-чат-бот Open Inference. Чем могу помочь?',
            delay: 500
        },
        {
            sender: 'user',
            text: 'Привет! Расскажи, как вы создаете чат-ботов?',
            delay: 1200
        },
        {
            sender: 'bot',
            text: 'Мы создаем AI-чат-ботов с использованием современных технологий искусственного интеллекта. Процесс включает несколько этапов:',
            delay: 2000
        },
        {
            sender: 'bot',
            text: '1. Анализ ваших бизнес-процессов и задач\n2. Настройка и обучение модели AI под ваши потребности\n3. Интеграция с вашими системами (CRM, мессенджеры)\n4. Тестирование и запуск за 5 дней',
            delay: 3500
        },
        {
            sender: 'user',
            text: 'А сколько это стоит?',
            delay: 6000
        },
        {
            sender: 'bot',
            text: 'Стоимость зависит от сложности и функционала бота. Базовое решение начинается от 50 000 ₸ и включает все необходимые функции для старта. Для получения точной стоимости, подходящей вашему бизнесу, оставьте заявку, и наш специалист подготовит индивидуальное предложение.',
            delay: 7000
        },
        {
            sender: 'user',
            text: 'А можно посмотреть примеры работы бота?',
            delay: 10000
        },
        {
            sender: 'bot',
            text: 'Конечно! Вы можете посмотреть примеры использования AI-ботов в разделе "Примеры задач" на этой странице. Также я могу соединить вас с менеджером, который покажет демо-версию бота в действии. Оставить заявку на демонстрацию?',
            delay: 11000
        }
    ];
    
    // Event Listeners
    startDemoBtn.addEventListener('click', startDemo);
    replayDemoBtn.addEventListener('click', startDemo);
    messageForm.addEventListener('submit', handleSendMessage);
    
    // Generate random session ID
    function generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    
    // Start the demo
    function startDemo() {
        demoStarted = true;
        demoFinished = false;
        chatMessages.innerHTML = '';
        emptyState.classList.add('hidden');
        startDemoBtn.classList.add('hidden');
        replayDemoBtn.classList.add('hidden');
        
        // Enable input after demo ends
        setTimeout(() => {
            userInput.disabled = false;
            sendButton.disabled = false;
            demoFinished = true;
            replayDemoBtn.classList.remove('hidden');
        }, demoMessages[demoMessages.length - 1].delay + 1000);
        
        // Show demo messages
        demoMessages.forEach((message, index) => {
            setTimeout(() => {
                addMessage(message.sender, message.text);
                scrollToBottom();
            }, message.delay);
        });
    }
    
    // Add a message to the chat
    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        messageBubble.textContent = text;
        
        messageDiv.appendChild(messageBubble);
        chatMessages.appendChild(messageDiv);
    }
    
    // Handle user message submission
    function handleSendMessage(e) {
        e.preventDefault();
        
        const message = userInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessage('user', message);
        scrollToBottom();
        
        // Clear input
        userInput.value = '';
        
        if (demoFinished) {
            // Send message to API
            sendMessageToAPI(message);
        }
    }
    
    // Send message to API
    function sendMessageToAPI(message) {
        // Disable input while waiting for response
        userInput.disabled = true;
        sendButton.disabled = true;
        
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                sessionId: sessionId
            })
        })
        .then(response => response.json())
        .then(data => {
            // Add bot response to chat
            if (data && data.response) {
                addMessage('bot', data.response);
            } else {
                addMessage('bot', 'Извините, произошла ошибка. Пожалуйста, попробуйте еще раз позже.');
            }
            scrollToBottom();
            
            // Re-enable input
            userInput.disabled = false;
            sendButton.disabled = false;
            userInput.focus();
        })
        .catch(error => {
            console.error('Error:', error);
            addMessage('bot', 'Извините, произошла ошибка при подключении к серверу. Пожалуйста, попробуйте еще раз позже.');
            scrollToBottom();
            
            // Re-enable input
            userInput.disabled = false;
            sendButton.disabled = false;
        });
    }
    
    // Scroll to bottom of chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
