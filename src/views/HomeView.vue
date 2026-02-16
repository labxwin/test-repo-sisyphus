<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = ref(null)

function generateGreeting() {
  if (!name.value.trim()) return
  
  const greetings = [
    `你好，${name.value}！祝你今天愉快！`,
    `嗨，${name.value}！歡迎光臨！`,
    `嘿，${name.value}！看到你真高興！`,
    `哈囉，${name.value}！今天過得好嗎？`,
  ]
  
  greeting.value = greetings[Math.floor(Math.random() * greetings.length)]
}

function reset() {
  name.value = ''
  greeting.value = null
}
</script>

<template>
  <div class="greeting-app">
    <div class="card">
      <h1 class="title">👋 Greeting</h1>
      
      <div v-if="!greeting" class="input-section">
        <p class="description">輸入你的名字，我會給你一個温暖的問候！</p>
        
        <input 
          v-model="name"
          type="text"
          placeholder="請輸入你的名字"
          class="input"
          @keyup.enter="generateGreeting"
        />
        
        <button 
          class="btn primary" 
          @click="generateGreeting"
          :disabled="!name.trim()"
        >
          產生問候
        </button>
      </div>
      
      <div v-else class="result-section">
        <p class="greeting-text">{{ greeting }}</p>
        
        <button class="btn secondary" @click="reset">
          重新輸入
        </button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  min-height: 100vh;
}

.greeting-app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.card {
  background: white;
  border-radius: 24px;
  padding: 3rem 2rem;
  width: 100%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.description {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.input {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.input:focus {
  border-color: #a8edea;
}

.btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn.primary {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
  font-weight: 600;
}

.btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
}

.btn.primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.secondary {
  background: #f0f0f0;
  color: #333;
  font-weight: 500;
}

.btn.secondary:hover {
  background: #e0e0e0;
}

.greeting-text {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>
