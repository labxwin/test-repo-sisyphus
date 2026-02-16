<script setup>
import { useRouter } from 'vue-router'
import { kinshipData } from '../data/kinship.js'

const router = useRouter()
const categories = kinshipData.categories

function selectCategory(categoryId) {
  router.push(`/relations/${categoryId}`)
}
</script>

<template>
  <div class="categories-view">
    <h1 class="title">親戚稱呼</h1>
    <p class="subtitle">選擇親屬系統</p>
    
    <div class="category-grid">
      <button 
        v-for="category in categories" 
        :key="category.id"
        class="category-btn"
        @click="selectCategory(category.id)"
      >
        <span class="icon">{{ category.icon }}</span>
        <span class="name">{{ category.name }}</span>
        <span class="desc">{{ category.desc }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.categories-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.category-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 140px;
}

.category-btn:hover {
  border-color: #42b983;
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(66, 185, 131, 0.2);
}

.category-btn:active {
  transform: translateY(-2px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.desc {
  font-size: 0.875rem;
  color: #888;
  text-align: center;
}

@media (max-width: 600px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .category-btn {
    min-height: 120px;
    padding: 1.25rem;
  }
  
  .title {
    font-size: 1.75rem;
  }
}
</style>
