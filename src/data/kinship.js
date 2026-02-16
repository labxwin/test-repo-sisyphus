// 親戚稱呼資料結構
export const kinshipData = {
  // 第一層：親屬系統
  categories: [
    { id: 'father', name: '父系親戚', icon: '👨', desc: '爺爺奶奶那邊的親戚' },
    { id: 'mother', name: '母系親戚', icon: '👩', desc: '外公外婆那邊的親戚' },
    { id: 'siblings', name: '兄弟姐妹', icon: '👫', desc: '同父母或表堂的兄弟姐妹' },
    { id: 'younger', name: '晚輩', icon: '👶', desc: '子女、孫子女、姪子女等' },
    { id: 'spouse', name: '姻親', icon: '💑', desc: '媳婦、女婿、媳婦家人等' }
  ],

  // 第二層：各系統的具體親戚
  relations: {
    father: [
      { id: 'paternal_grandfather', name: '爺爺', title: '爺爺', explanation: '爸爸的爸爸' },
      { id: 'paternal_grandmother', name: '奶奶', title: '奶奶', explanation: '爸爸的媽媽' },
      { id: 'paternal_granduncle', name: '伯公', title: '伯公', explanation: '爺爺的哥哥' },
      { id: 'paternal_grandaunt', name: '姑婆', title: '姑婆', explanation: '爺爺的姊妹' },
      { id: 'father_uncle_older', name: '伯伯', title: '伯伯', explanation: '爸爸的哥哥' },
      { id: 'father_uncle_younger', name: '叔叔', title: '叔叔', explanation: '爸爸的弟弟' },
      { id: 'father_aunt_older', name: '姑姑(大姑)', title: '姑姑', explanation: '爸爸的姊妹' },
      { id: 'father_aunt_younger', name: '姑姑(小姑)', title: '姑姑', explanation: '爸爸的妹妹' },
      { id: 'cousin_older', name: '堂哥/堂姐', title: '堂哥/堂姐', explanation: '伯伯或叔叔的孩子（男稱堂哥，女稱堂姐）' },
      { id: 'cousin_younger', name: '堂弟/堂妹', title: '堂弟/堂妹', explanation: '伯伯或叔叔的孩子（男稱堂弟，女稱堂妹）' },
      { id: 'nephew', name: '姪子/姪女', title: '姪子/姪女', explanation: '哥哥或弟弟的孩子' }
    ],
    mother: [
      { id: 'maternal_grandfather', name: '外公', title: '外公', explanation: '媽媽的爸爸' },
      { id: 'maternal_grandmother', name: '外婆', title: '外婆', explanation: '媽媽的媽媽' },
      { id: 'maternal_granduncle', name: '舅公', title: '舅公', explanation: '外婆的哥哥' },
      { id: 'maternal_grandaunt', name: '姨婆', title: '姨婆', explanation: '外婆的姊妹' },
      { id: 'uncle_older', name: '舅舅(大舅)', title: '舅舅', explanation: '媽媽的哥哥' },
      { id: 'uncle_younger', name: '舅舅(小舅)', title: '舅舅', explanation: '媽媽的弟弟' },
      { id: 'aunt_older', name: '阿姨(大姨)', title: '阿姨', explanation: '媽媽的姊妹' },
      { id: 'aunt_younger', name: '阿姨(小姨)', title: '阿姨', explanation: '媽媽的妹妹' },
      { id: 'cousin_older', name: '表哥/表姐', title: '表哥/表姐', explanation: '舅舅或阿姨的孩子（男稱表哥，女稱表姐）' },
      { id: 'cousin_younger', name: '表弟/表妹', title: '表弟/表妹', explanation: '舅舅或阿姨的孩子（男稱表弟，女稱表妹）' },
      { id: 'nephew', name: '外甥/外甥女', title: '外甥/外甥女', explanation: '舅舅或阿姨的孩子' }
    ],
    siblings: [
      { id: 'brother_older', name: '哥哥', title: '哥哥', explanation: '父母的兒子中比我年長的' },
      { id: 'brother_younger', name: '弟弟', title: '弟弟', explanation: '父母的兒子中比我年幼的' },
      { id: 'sister_older', name: '姐姐', title: '姐姐', explanation: '父母的的女兒中比我年長的' },
      { id: 'sister_younger', name: '妹妹', title: '妹妹', explanation: '父母的的女兒中比我年幼的' },
      { id: 'half_brother_older', name: '異父/異母哥哥', title: '異父/異母哥哥', explanation: '不同父親或母親的哥哥' },
      { id: 'half_brother_younger', name: '異父/異母弟弟', title: '異父/異母弟弟', explanation: '不同父親或母親的弟弟' },
      { id: 'half_sister_older', name: '異父/異母姐姐', title: '異父/異母姐姐', explanation: '不同父親或母親的姐姐' },
      { id: 'half_sister_younger', name: '異父/異母妹妹', title: '異父/異母妹妹', explanation: '不同父親或母親的妹妹' },
      { id: 'step_brother', name: '繼兄/繼弟', title: '繼兄/繼弟', explanation: '父母再婚後的兒子' },
      { id: 'step_sister', name: '繼姐/繼妹', title: '繼姐/繼妹', explanation: '父母再婚後的女兒' }
    ],
    younger: [
      { id: 'son', name: '兒子', title: '兒子', explanation: '自己的兒子' },
      { id: 'daughter', name: '女兒', title: '女兒', explanation: '自己的女兒' },
      { id: 'son_in_law', name: '女婿', title: '女婿', explanation: '女兒的丈夫' },
      { id: 'daughter_in_law', name: '媳婦', title: '媳婦', explanation: '兒子的妻子' },
      { id: 'grandson', name: '孫子', title: '孫子', explanation: '兒子或女兒的兒子' },
      { id: 'granddaughter', name: '孫女', title: '孫女', explanation: '兒子或女兒的女兒' },
      { id: 'grandson_in_law', name: '孫女婿', title: '孫女婿', explanation: '孫女的丈夫' },
      { id: 'granddaughter_in_law', name: '孫媳婦', title: '孫媳婦', explanation: '孫子的妻子' },
      { id: 'great_grandson', name: '曾孫', title: '曾孫', explanation: '孫子的孫子' },
      { id: 'great_granddaughter', name: '曾孫女', title: '曾孫女', explanation: '孫子的孫女' },
      { id: 'nephew', name: '姪子', title: '姪子', explanation: '兄弟的兒子' },
      { id: 'niece', name: '姪女', title: '姪女', explanation: '兄弟的女兒' },
      { id: 'grand_nephew', name: '姪孫', title: '姪孫', explanation: '姪子或姪女的孩子' },
      { id: 'grand_niece', name: '姪孫女', title: '姪孫女', explanation: '姪子或姪女的女兒' }
    ],
    spouse: [
      { id: 'wife', name: '妻子', title: '老婆/太太', explanation: '自己的妻子' },
      { id: 'husband', name: '丈夫', title: '老公/先生', explanation: '自己的丈夫' },
      { id: 'father_in_law', name: '公公/岳父', title: '公公/岳父', explanation: '丈夫或妻子的爸爸' },
      { id: 'mother_in_law', name: '婆婆/岳母', title: '婆婆/岳母', explanation: '丈夫或妻子的媽媽' },
      { id: 'brother_in_law', name: '姐夫/妹夫', title: '姐夫/妹夫', explanation: '妻子或丈夫的兄弟' },
      { id: 'sister_in_law', name: '嫂子/弟妹', title: '嫂子/弟妹', explanation: '妻子或丈夫的姊妹' },
      { id: 'brother_wife', name: '嫂子', title: '嫂子', explanation: '哥哥的妻子' },
      { id: 'brother_wife_younger', name: '弟妹', title: '弟妹', explanation: '弟弟的妻子' },
      { id: 'sister_husband', name: '姐夫', title: '姐夫', explanation: '姐姐的丈夫' },
      { id: 'sister_husband_younger', name: '妹夫', title: '妹夫', explanation: '妹妹的丈夫' },
      { id: 'uncle_by_marriage', name: '姑丈/姨丈', title: '姑丈/姨丈', explanation: '姑姑或阿姨的丈夫' },
      { id: 'aunt_by_marriage', name: '姑媽/姨媽', title: '姑媽/姨媽', explanation: '姑姑或阿姨（已婚）' },
      { id: 'father_wife_family', name: '岳父家屬', title: '岳父家屬', explanation: '妻子的兄弟姊妹' },
      { id: 'father_family', name: '公公家屬', title: '公公家屬', explanation: '丈夫的兄弟姊妹' },
      { id: 'co_sister_in_law', name: '大嫂/小姑', title: '大嫂/小姑', explanation: '丈夫兄弟的妻子或丈夫姊妹' }
    ]
  }
}

// 取得親屬系統
export function getCategoryById(id) {
  return kinshipData.categories.find(c => c.id === id)
}

// 取得特定親屬系統的所有關係
export function getRelationsByCategory(categoryId) {
  return kinshipData.relations[categoryId] || []
}

// 取得特定關係的詳細資料
export function getRelationById(categoryId, relationId) {
  const relations = kinshipData.relations[categoryId] || []
  return relations.find(r => r.id === relationId)
}
