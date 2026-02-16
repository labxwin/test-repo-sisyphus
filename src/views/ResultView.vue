<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getCategoryById, getRelationById } from '../data/kinship.js'

const router = useRouter()
const route = useRoute()

const categoryId = computed(() => route.params.categoryId)
const relationId = computed(() => route.params.relationId)
const category = computed(() => getCategoryById(categoryId.value))
const relation = computed(() => getRelationById(categoryId.value, relationId.value))

function reset() {
  router.push('/')
}
</script>

<template>
  <div class="result-view">
    <div class="result-card">
      <div class="icon-area">
        <span class="icon">{{ category?.icon }}</span>
      </div>
      
      <h1 class="title">{{ relation?.title }}</h1>
      
      <div class="explanation-box">
        <p class="explanation-label">稱呼由來</p>
        <p class="explanation-text">{{ relation?.explanation }}</p>
      </div>
      
      <p class="call-hint">我稱呼他/她：<strong>{{ relation?.title }}</strong></p>
      
      <button class="reset-btn" @click="reset">
        重新選擇
      </button>
    </div>
  </div>
</template>

<style scoped>
.result-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.result-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.icon-area {
  margin-bottom: 1rem;
}

.icon {
  font-size: 4rem;
}

.title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.explanation-box {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.explanation-label {
  color: #888;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.explanation-text {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 500;
}

.call-hint {
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.call-hint strong {
  color: #42b983;
  font-size: 1.25rem;
}

.reset-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.3);
}

.reset-btn:active {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .result-card {
    padding: 2rem 1.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .icon {
    font-size: 3rem;
  }
  
  .reset-btn {
    width: 100%;
    padding: 1rem;
  }
}
</style>
