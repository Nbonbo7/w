const app = Vue.createApp({
  data() {
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['ja', 'en', 'cn', 'chs', 'cht', 'de', 'es', 'fr', 'id', 'it', 'kr', 'pt', 'ru', 'th', 'tr', 'vi'];
    const defaultLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
    return {
      showSettings: false,
      selectedLanguage: defaultLanguage,
      languageData: {
        ja: {
              home: 'ホーム',
              character: 'キャラクター',
              weapon: '武器',
              artifact: 'アーティファクト',
              atsc: 'Score',
              screenshot: 'スクリーンショット',
              help: 'ヘルプ',
              settings: '設定'
            },
            en: {
              home: 'Home',
              character: 'Character',
              weapon: 'Weapon',
              artifact: 'Artifact',
              atsc: 'Score',
              screenshot: 'Screenshot',
              help: 'Help',
              settings: 'Settings'
            },
            cn: {
              home: '主页',
              character: '角色',
              weapon: '武器',
              artifact: '圣遗物',
              atsc: 'Score',
              screenshot: '截图',
              help: '帮助',
              settings: '设置'
            },
            chs: {
              home: '主页',
              character: '角色',
              weapon: '武器',
              artifact: '圣遗物',
              atsc: 'Score',
              screenshot: '截图',
              help: '帮助',
              settings: '设置'
            },
            cht: {
              home: '主頁',
              character: '角色',
              weapon: '武器',
              artifact: '神器',
              atsc: 'Score',
              screenshot: '截圖',
              help: '幫助',
              settings: '設置'
            },
            de: {
              home: 'Startseite',
              character: 'Charakter',
              weapon: 'Waffe',
              artifact: 'Artefakt',
              atsc: 'Score',
              screenshot: 'Bildschirmfoto',
              help: 'Hilfe',
              settings: 'Einstellungen'
            },
            es: {
              home: 'Inicio',
              character: 'Personaje',
              weapon: 'Arma',
              artifact: 'Artefacto',
              atsc: 'Score',
              screenshot: 'Captura de pantalla',
              help: 'Ayuda',
              settings: 'Ajustes'
            },
            fr: {
              home: 'Accueil',
              character: 'Personnage',
              weapon: 'Arme',
              artifact: 'Artefact',
              atsc: 'Score',
              screenshot: 'Capture d\'écran',
              help: 'Aide',
              settings: 'Paramètres'
            },
            id: {
              home: 'Beranda',
              character: 'Karakter',
              weapon: 'Senjata',
              artifact: 'Artefak',
              atsc: 'Score',
              screenshot: 'Tangkapan Layar',
              help: 'Bantuan',
              settings: 'Pengaturan'
            },
            it: {
              home: 'Home',
              character: 'Personaggio',
              weapon: 'Arma',
              artifact: 'Artefatto',
              atsc: 'Score',
              screenshot: 'Screenshot',
              help: 'Aiuto',
              settings: 'Impostazioni'
            },
            kr: {
              home: '홈',
              character: '캐릭터',
              weapon: '무기',
              artifact: '유물',
              atsc: 'Score',
              screenshot: '스크린샷',
              help: '도움말',
              settings: '설정'
            },
            pt: {
              home: 'Início',
              character: 'Personagem',
              weapon: 'Arma',
              artifact: 'Artefato',
              atsc: 'Score',
              screenshot: 'Captura de tela',
              help: 'Ajuda',
              settings: 'Configurações'
            },
            ru: {
              home: 'Главная',
              character: 'Персонаж',
              weapon: 'Оружие',
              artifact: 'Артефакт',
              atsc: 'Score',
              screenshot: 'Скриншот',
              help: 'Помощь',
              settings: 'Настройки'
            },
            th: {
              home: 'หน้าแรก',
              character: 'ตัวละคร',
              weapon: 'อาวุธ',
              artifact: 'สิ่งประดิษฐ์',
              atsc: 'Score',
              screenshot: 'จับภาพหน้าจอ',
              help: 'ช่วยเหลือ',
              settings: 'การตั้งค่า'
            },
            tr: {
              home: 'Anasayfa',
              character: 'Karakter',
              weapon: 'Silah',
              artifact: 'Artefakt',
              atsc: 'Score',
              screenshot: 'Ekran Görüntüsü',
              help: 'Yardım',
              settings: 'Ayarlar'
            },
            vi: {
              home: 'Trang chủ',
              character: 'Nhân vật',
              weapon: 'Vũ khí',
              artifact: 'Vật phẩm',
              atsc: 'Score',
              screenshot: 'Ảnh chụp màn hình',
              help: 'Trợ giúp',
              settings: 'Cài đặt'
            }
      },
    };
  },
  computed: {
    currentLanguage() {
      return this.languageData[this.selectedLanguage];
    },
  },
  mounted() {
  },
  methods: {
toggleSettings() {
  this.showSettings = !this.showSettings;
},
    closeSettings() {
      this.showSettings = false;
    }
  }
});

app.mount('#app');