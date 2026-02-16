<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getCategoryById, getRelationsByCategory } from '../data/kinship.js'

const router = useRouter()
const route = useRoute()

const categoryId = computed(() => route.params.categoryId)
const category = computed(() => getCategoryById(categoryId.value))
const relations = computed(() => getRelationsByCategory(categoryId.value))

function selectRelation(relationId) {
  router.push(`/result/${categoryId.value}/${relationId}`)
}

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="relations-view">
    <button class="back-btn" @click="goBack">
      ← 返回
    </button>
    
    <h1 class="title">
      <span class="icon">{{ category?.icon }}</span>
      {{ category?.name }}
    </h1>
    <p class="subtitle">選擇親戚關係</p>
    
    <div class="relations-grid">
      <button 
        v-for="relation in relations" 
        :key="relation.id"
        class="relation-btn"
        @click="selectRelation(relation.id)"
      >
        <span class="name">{{ relation.name }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.relations-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.back-btn {
  background: none;
  border: none;
  color: #42b983;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}

.back-btn:hover {
  text-decoration: underline;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}

.icon {
  font-size: 2rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.relations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.relation-btn {
  padding: 1.25rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 60px;
}

.relation-btn:hover {
  border-color: #42b983;
  background: #f8fff8;
}

.relation-btn:active {
  transform: scale(0.98);
}

.name {
  font-size: 1.1rem;
  font-weight: 500;
  color: #2c3e50;
}

@media (max-width: 600px) {
  .relations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .relation-btn {
    padding: 1rem;
    min-height: 56px;
  }
  
  .name {
    font-size: 1rem;
  }
}
</style>
