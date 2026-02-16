export const kinshipTree = {
  father: {
    name: '父系親戚',
    icon: '👨',
    relations: [
      {
        id: 'paternal_grandfather',
        name: '爺爺',
        title: '爺爺',
        explanation: '爸爸的爸爸',
        children: null
      },
      {
        id: 'paternal_grandmother',
        name: '奶奶',
        title: '奶奶',
        explanation: '爸爸的媽媽',
        children: null
      },
      {
        id: 'father_brother',
        name: '伯伯/叔叔',
        title: '伯伯/叔叔',
        explanation: '爸爸的兄弟',
        children: [
          {
            id: 'cousin',
            name: '堂兄弟姊妹',
            getTitle: (gender) => gender === 'male' ? '堂哥/堂弟' : '堂姐/堂妹',
            getExplanation: () => '伯伯或叔叔的孩子',
            children: [
              {
                id: 'cousin_child',
                name: '堂侄/堂侄女',
                getTitle: (gender) => gender === 'male' ? '堂侄' : '堂侄女',
                getExplanation: () => '堂兄弟姊妹的孩子',
                children: null
              }
            ]
          },
          {
            id: 'nephew',
            name: '姪子/姪女',
            getTitle: (gender) => gender === 'male' ? '姪子' : '姪女',
            getExplanation: () => '哥哥或弟弟的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '姪孫/姪孫女',
                getTitle: (gender) => gender === 'male' ? '姪孫' : '姪孫女',
                getExplanation: () => '姪子或姪女的孩子',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 'father_sister',
        name: '姑姑',
        title: '姑姑',
        explanation: '爸爸的姊妹',
        children: [
          {
            id: 'cousin',
            name: '表兄弟姊妹',
            getTitle: (gender) => gender === 'male' ? '表哥/表弟' : '表姐/表妹',
            getExplanation: () => '姑姑的孩子',
            children: [
              {
                id: 'cousin_child',
                name: '表侄/表侄女',
                getTitle: (gender) => gender === 'male' ? '表侄' : '表侄女',
                getExplanation: () => '表兄弟姊妹的孩子',
                children: null
              }
            ]
          }
        ]
      }
    ]
  },
  mother: {
    name: '母系親戚',
    icon: '👩',
    relations: [
      {
        id: 'maternal_grandfather',
        name: '外公',
        title: '外公',
        explanation: '媽媽的爸爸',
        children: null
      },
      {
        id: 'maternal_grandmother',
        name: '外婆',
        title: '外婆',
        explanation: '媽媽的媽媽',
        children: null
      },
      {
        id: 'mother_brother',
        name: '舅舅',
        title: '舅舅',
        explanation: '媽媽的兄弟',
        children: [
          {
            id: 'cousin',
            name: '表兄弟姊妹',
            getTitle: (gender) => gender === 'male' ? '表哥/表弟' : '表姐/表妹',
            getExplanation: () => '舅舅的孩子',
            children: [
              {
                id: 'cousin_child',
                name: '表侄/表侄女',
                getTitle: (gender) => gender === 'male' ? '表侄' : '表侄女',
                getExplanation: () => '表兄弟姊妹的孩子',
                children: null
              }
            ]
          },
          {
            id: 'nephew',
            name: '外甥/外甥女',
            getTitle: (gender) => gender === 'male' ? '外甥' : '外甥女',
            getExplanation: () => '舅舅的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '外姪孫/外姪孫女',
                getTitle: (gender) => gender === 'male' ? '外姪孫' : '外姪孫女',
                getExplanation: () => '外甥或外甥女的孩子',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 'mother_sister',
        name: '阿姨',
        title: '阿姨',
        explanation: '媽媽的姊妹',
        children: [
          {
            id: 'cousin',
            name: '表兄弟姊妹',
            getTitle: (gender) => gender === 'male' ? '表哥/表弟' : '表姐/表妹',
            getExplanation: () => '阿姨的孩子',
            children: [
              {
                id: 'cousin_child',
                name: '表侄/表侄女',
                getTitle: (gender) => gender === 'male' ? '表侄' : '表侄女',
                getExplanation: () => '表兄弟姊妹的孩子',
                children: null
              }
            ]
          }
        ]
      }
    ]
  },
  siblings: {
    name: '兄弟姐妹',
    icon: '👫',
    relations: [
      {
        id: 'brother_older',
        name: '哥哥',
        title: '哥哥',
        explanation: '父母的兒子中比我年長的',
        children: [
          {
            id: 'nephew',
            name: '姪子/姪女',
            getTitle: (gender) => gender === 'male' ? '姪子' : '姪女',
            getExplanation: () => '哥哥的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '姪孫/姪孫女',
                getTitle: (gender) => gender === 'male' ? '姪孫' : '姪孫女',
                getExplanation: () => '姪子或姪女的孩子',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 'brother_younger',
        name: '弟弟',
        title: '弟弟',
        explanation: '父母的兒子中比我年幼的',
        children: [
          {
            id: 'nephew',
            name: '姪子/姪女',
            getTitle: (gender) => gender === 'male' ? '姪子' : '姪女',
            getExplanation: () => '弟弟的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '姪孫/姪孫女',
                getTitle: (gender) => gender === 'male' ? '姪孫' : '姪孫女',
                getExplanation: () => '姪子或姪女的孩子',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 'sister_older',
        name: '姐姐',
        title: '姐姐',
        explanation: '父母的 女兒中比我年長的',
        children: [
          {
            id: 'nephew',
            name: '外甥/外甥女',
            getTitle: (gender) => gender === 'male' ? '外甥' : '外甥女',
            getExplanation: () => '姐姐的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '外姪孫/外姪孫女',
                getTitle: (gender) => gender === 'male' ? '外姪孫' : '外姪孫女',
                getExplanation: () => '外甥或外甥女的孩子',
                children: null
              }
            ]
          }
        ]
      },
      {
        id: 'sister_younger',
        name: '妹妹',
        title: '妹妹',
        explanation: '父母的 女兒中比我年幼的',
        children: [
          {
            id: 'nephew',
            name: '外甥/外甥女',
            getTitle: (gender) => gender === 'male' ? '外甥' : '外甥女',
            getExplanation: () => '妹妹的孩子',
            children: [
              {
                id: 'grand_nephew',
                name: '外姪孫/外姪孫女',
                getTitle: (gender) => gender === 'male' ? '外姪孫' : '外姪孫女',
                getExplanation: () => '外甥或外甥女的孩子',
                children: null
              }
            ]
          }
        ]
      }
    ]
  },
  self: {
    name: '晚輩',
    icon: '👶',
    relations: [
      {
        id: 'son',
        name: '兒子',
        title: '兒子',
        explanation: '自己的兒子',
        children: [
          {
            id: 'grandson',
            name: '孫子/孫女',
            getTitle: (gender) => gender === 'male' ? '孫子' : '孫女',
            getExplanation: () => '兒子或女兒的孩子',
            children: [
              {
                id: 'great_grandson',
                name: '曾孫/曾孫女',
                getTitle: (gender) => gender === 'male' ? '曾孫' : '曾孫女',
                getExplanation: () => '孫子或孫女的孩子',
                children: null
              }
            ]
          },
          {
            id: 'daughter_in_law',
            name: '媳婦',
            title: '媳婦',
            explanation: '兒子的妻子',
            children: null
          }
        ]
      },
      {
        id: 'daughter',
        name: '女兒',
        title: '女兒',
        explanation: '自己的女兒',
        children: [
          {
            id: 'grandson',
            name: '孫子/孫女',
            getTitle: (gender) => gender === 'male' ? '孫子' : '孫女',
            getExplanation: () => '兒子或女兒的孩子',
            children: [
              {
                id: 'great_grandson',
                name: '曾孫/曾孫女',
                getTitle: (gender) => gender === 'male' ? '曾孫' : '曾孫女',
                getExplanation: () => '孫子或孫女的孩子',
                children: null
              }
            ]
          },
          {
            id: 'son_in_law',
            name: '女婿',
            title: '女婿',
            explanation: '女兒的丈夫',
            children: null
          }
        ]
      }
    ]
  },
  spouse: {
    name: '姻親',
    icon: '💑',
    relations: [
      {
        id: 'father_in_law',
        name: '公公/岳父',
        title: '公公/岳父',
        explanation: '丈夫或妻子的爸爸',
        children: null
      },
      {
        id: 'mother_in_law',
        name: '婆婆/岳母',
        title: '婆婆/岳母',
        explanation: '丈夫或妻子的媽媽',
        children: null
      },
      {
        id: 'brother_in_law',
        name: '姐夫/妹夫',
        title: '姐夫/妹夫',
        explanation: '妻子或丈夫的兄弟',
        children: [
          {
            id: 'nephew',
            name: '外甥/外甥女',
            getTitle: (gender) => gender === 'male' ? '外甥' : '外甥女',
            getExplanation: () => '姐夫或妹夫的孩子',
            children: null
          }
        ]
      },
      {
        id: 'sister_in_law',
        name: '嫂子/弟妹',
        title: '嫂子/弟妹',
        explanation: '妻子或丈夫的姊妹',
        children: [
          {
            id: 'nephew',
            name: '姪子/姪女',
            getTitle: (gender) => gender === 'male' ? '姪子' : '姪女',
            getExplanation: () => '嫂子或弟妹的孩子',
            children: null
          }
        ]
      }
    ]
  }
}

export function getSystemById(id) {
  return kinshipTree[id]
}
