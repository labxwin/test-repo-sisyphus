<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getSystemById } from '../data/kinship.js'

const router = useRouter()

const systems = [
  { id: 'father', name: '父系', icon: '👨' },
  { id: 'mother', name: '母系', icon: '👩' },
  { id: 'siblings', name: '兄弟姊妹', icon: '👫' },
  { id: 'self', name: '晚輩', icon: '👶' },
  { id: 'spouse', name: '姻親', icon: '💑' }
]

const currentStep = ref(0)
const selectedSystem = ref(null)
const selectedRelation = ref(null)
const path = ref([])
const gender = ref(null)
const showGenderModal = ref(false)

const isMobile = ref(window.innerWidth <= 768)

function handleResize() {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const currentSystem = computed(() => {
  if (!selectedSystem.value) return null
  return getSystemById(selectedSystem.value)
})

const currentRelations = computed(() => {
  if (!currentSystem.value) return []
  return currentSystem.value.relations
})

const currentChildren = computed(() => {
  if (!selectedRelation.value) return null
  return selectedRelation.value.children
})

function selectSystem(systemId) {
  selectedSystem.value = systemId
  selectedRelation.value = null
  path.value = []
  gender.value = null
  currentStep.value = 1
}

function selectRelation(relation) {
  selectedRelation.value = relation
  
  if (relation.children) {
    currentStep.value = 2
  } else {
    if (relation.getTitle) {
      showGenderModal.value = true
    } else {
      currentStep.value = 3
    }
  }
}

function selectChild(child) {
  path.value.push({ 
    id: child.id, 
    name: child.name,
    getTitle: child.getTitle,
    getExplanation: child.getExplanation
  })
  
  if (!child.children) {
    if (child.getTitle) {
      showGenderModal.value = true
    } else {
      currentStep.value = 3
    }
  }
}

function selectGender(selectedGender) {
  gender.value = selectedGender
  showGenderModal.value = false
  currentStep.value = 3
}

function getFinalTitle() {
  if (selectedRelation.value?.getTitle && gender.value !== null) {
    return selectedRelation.value.getTitle(gender.value)
  }
  if (path.value.length > 0) {
    const last = path.value[path.value.length - 1]
    if (last.getTitle && gender.value !== null) {
      return last.getTitle(gender.value)
    }
  }
  return selectedRelation.value?.title
}

function getFinalExplanation() {
  if (selectedRelation.value?.getExplanation) {
    return selectedRelation.value.getExplanation()
  }
  if (path.value.length > 0) {
    const last = path.value[path.value.length - 1]
    if (last.getExplanation) {
      return last.getExplanation()
    }
  }
  return selectedRelation.value?.explanation
}

function getFullExplanation() {
  const parts = []
  
  if (currentSystem.value) {
    parts.push(currentSystem.value.name)
  }
  
  if (selectedRelation.value) {
    parts.push(selectedRelation.value.explanation || selectedRelation.value.name)
  }
  
  path.value.forEach(p => {
    if (p.getExplanation) {
      parts.push(p.getExplanation())
    } else {
      parts.push(p.name)
    }
  })
  
  return parts.join(' → ')
}

function goBack() {
  if (currentStep.value === 3) {
    if (path.value.length > 0) {
      const last = path.value[path.value.length - 1]
      if (last.getTitle) {
        gender.value = null
        showGenderModal.value = true
        currentStep.value = 2
        return
      }
    }
    if (selectedRelation.value?.getTitle) {
      gender.value = null
      showGenderModal.value = true
      currentStep.value = 2
      return
    }
    if (selectedRelation.value?.children) {
      currentStep.value = 2
      return
    }
  }
  
  if (path.value.length > 0) {
    path.value.pop()
    if (path.value.length === 0 && selectedRelation.value?.children) {
      currentStep.value = 2
    }
    return
  }
  
  if (currentStep.value === 2) {
    currentStep.value = 1
    selectedRelation.value = null
    return
  }
  
  if (currentStep.value === 1) {
    selectedSystem.value = null
    currentStep.value = 0
  }
}

function reset() {
  selectedSystem.value = null
  selectedRelation.value = null
  path.value = []
  gender.value = null
  currentStep.value = 0
}
</script>

<template>
  <div class="app" :class="{ mobile: isMobile }">
    <div v-if="currentStep === 0" class="step step-0">
      <div class="header">
        <h1 class="title">親戚稱呼</h1>
        <p class="subtitle">選擇親屬系統</p>
      </div>
      
      <div class="system-grid">
        <button 
          v-for="system in systems" 
          :key="system.id"
          class="system-btn"
          @click="selectSystem(system.id)"
        >
          <span class="icon">{{ system.icon }}</span>
          <span class="name">{{ system.name }}</span>
        </button>
      </div>
    </div>
    
    <div v-else-if="currentStep === 1" class="step step-1">
      <div class="breadcrumb">
        <button class="back-btn" @click="goBack">← 返回</button>
        <span class="system-name">{{ currentSystem?.icon }} {{ currentSystem?.name }}</span>
      </div>
      
      <h2 class="step-title">這位親戚是？</h2>
      
      <div class="relation-grid">
        <button 
          v-for="relation in currentRelations" 
          :key="relation.id"
          class="relation-btn"
          @click="selectRelation(relation)"
        >
          {{ relation.name }}
        </button>
      </div>
    </div>
    
    <div v-else-if="currentStep === 2" class="step step-2">
      <div class="breadcrumb">
        <button class="back-btn" @click="goBack">← 返回</button>
        <div class="breadcrumb-path">
          <span>{{ currentSystem?.icon }} {{ currentSystem?.name }}</span>
          <span v-for="(p, i) in path" :key="i"> → {{ p.name }}</span>
          <span> → {{ selectedRelation?.name }}</span>
        </div>
      </div>
      
      <h2 class="step-title">請問是 {{ selectedRelation?.name }} 的？</h2>
      
      <div class="relation-grid">
        <button 
          v-for="child in currentChildren" 
          :key="child.id"
          class="relation-btn"
          @click="selectChild(child)"
        >
          {{ child.name }}
        </button>
      </div>
    </div>
    
    <div v-else-if="currentStep === 3" class="step step-3">
      <div class="breadcrumb">
        <button class="back-btn" @click="goBack">← 返回</button>
      </div>
      
      <div class="result-card">
        <div class="result-icon">{{ currentSystem?.icon }}</div>
        <h1 class="result-title">{{ getFinalTitle() }}</h1>
        
        <div class="explanation-box">
          <p class="explanation-label">稱呼由來</p>
          <p class="explanation-text">{{ getFullExplanation() }}</p>
        </div>
        
        <p class="call-hint">我稱呼他/她：<strong>{{ getFinalTitle() }}</strong></p>
        
        <button class="reset-btn" @click="reset">
          重新選擇
        </button>
      </div>
    </div>
    
    <div v-if="showGenderModal" class="modal-overlay" @click="showGenderModal = false">
      <div class="modal" @click.stop>
        <h3 class="modal-title">請問這位是？</h3>
        <div class="modal-btns">
          <button class="modal-btn male" @click="selectGender('male')">👦 男性</button>
          <button class="modal-btn female" @click="selectGender('female')">👧 女性</button>
        </div>
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  padding: 2rem;
}

.app.mobile {
  padding: 1rem;
}

.step-0 .header {
  text-align: center;
  margin-bottom: 3rem;
}

.step-0 .title {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.step-0 .subtitle {
  color: rgba(255,255,255,0.8);
  font-size: 1.2rem;
}

.system-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.system-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.system-btn:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

.system-btn .icon {
  font-size: 3rem;
  margin-bottom: 0.75rem;
}

.system-btn .name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.back-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
}

.back-btn:hover {
  background: rgba(255,255,255,0.3);
}

.system-name {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.breadcrumb-path {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  flex: 1;
}

.step-title {
  text-align: center;
  color: white;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.relation-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.relation-btn {
  padding: 1.25rem 1rem;
  background: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.relation-btn:hover {
  background: #f0f0f0;
  transform: scale(1.02);
}

.result-card {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.result-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.result-title {
  color: #333;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.explanation-box {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.explanation-label {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
}

.explanation-text {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
}

.call-hint {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.call-hint strong {
  color: #667eea;
  font-size: 1.4rem;
}

.reset-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-title {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal-btns {
  display: flex;
  gap: 1rem;
}

.modal-btn {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-btn.male {
  background: #e3f2fd;
  color: #1976d2;
}

.modal-btn.male:hover {
  background: #bbdefb;
}

.modal-btn.female {
  background: #fce4ec;
  color: #c2185b;
}

.modal-btn.female:hover {
  background: #f8bbd0;
}

.app.mobile {
  padding: 1rem;
}

.app.mobile .step-0 .title {
  font-size: 1.75rem;
}

.app.mobile .system-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.app.mobile .system-btn {
  padding: 1.5rem 0.75rem;
}

.app.mobile .system-btn .icon {
  font-size: 2rem;
}

.app.mobile .system-btn .name {
  font-size: 0.95rem;
}

.app.mobile .step-title {
  font-size: 1.25rem;
}

.app.mobile .relation-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.app.mobile .relation-btn {
  padding: 1rem 0.5rem;
  font-size: 0.95rem;
}

.app.mobile .result-card {
  padding: 2rem 1.5rem;
}

.app.mobile .result-title {
  font-size: 2.25rem;
}

.app.mobile .modal-btns {
  flex-direction: column;
}
</style>
