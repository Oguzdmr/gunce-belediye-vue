import Index from './components/Index'
import Kentrehberi from './components/Kentrehberi'
import Projeler from './components/Projeler'
import Baskan from './components/home/Baskan'
import Baskanalbum from './components/home/Baskanalbum'
import Baskanasor from './components/home/Baskanasor'
import Baskanmesaji from './components/home/Baskanmesaji'
import Baskanyardimcilari from './components/home/Baskanyardimcilari'
import Belgeornekleri from './components/home/Belgeornekleri'
import Birfikrimvar from './components/home/Birfikrimvar'
import Birimler from './components/home/Birimler'
import Duyurular from './components/home/Duyurular'
import Encumenler from './components/home/Encumenler'
import Eskibaskanlar from './components/home/Eskibaskanlar'
import Faaliyetraporlari from './components/home/Faaliyetraporlari'
import Galeri from './components/home/Galeri'
import Iletisim from './components/home/Iletisim'
import Isteksikayet from './components/home/Isteksikayet'
import Komisyonkararlari from './components/home/Komisyonkararlari'
import Mecliskararlari from './components/home/Mecliskararlari'
import Meclisuyeleri from './components/home/Meclisuyeleri'
import Misyonvizyon from './components/home/Misyonvizyon'
import Muhtarlar from './components/home/Muhtarlar'
import Sehitlerimiz from './components/home/Sehitlerimiz'
import Tarihce from './components/home/Tarihce'
import Vefatedenler from './components/home/Vefatedenler'
import Videogaleri from './components/home/Videogaleri'
import Haber1 from './components/haberler/1.vue'
import Haber1_2 from './components/haberler/1-2.vue'
import Haberbelediyekultur from './components/haberler/belediye-kultur-evi-hizmete-girdi-21.vue'
import Haberbelediyeotopark from './components/haberler/belediye-otoparkimiz-hizmete-girdi-16.vue'
import Habermobiluygulama from './components/haberler/mobil-uygulamamiz-yayinda-160.vue'
import Haberrobotikkodlama from './components/haberler/robotik-kodlama-dersleri-basliyor-15.vue'
import Haberturist from './components/haberler/turistler-ilcemizi-artik-daha-cok-seviyor-159.vue'
import Duyurudetay58 from './components/home/duyurudetay/58.vue'
import Duyurudetay59 from './components/home/duyurudetay/59.vue'
import Duyurudetay60 from './components/home/duyurudetay/60.vue'
import Duyurudetay61 from './components/home/duyurudetay/61.vue'
import Duyurudetay62 from './components/home/duyurudetay/62.vue'
import Yararlilinkler from './components/home/yararlilinkler.vue'
import Yenidoganlar from './components/home/Yenidoganlar.vue'
import Etkinlik1 from './components/etkinlikler/1.vue'
import Etkinlik1_2 from './components/etkinlikler/1-2.vue'
import Etkinlikkonser from './components/etkinlikler/belediyemiz-konser-duzenliyor-52.vue'
import Etkinlikfidan from './components/etkinlikler/bir-fidan-bir-hayat-51.vue'
import Etkinlikcocuksenlik from './components/etkinlikler/cocuk-senligi-53.vue'
import Etkinliksatranc from './components/etkinlikler/satranc-turnuvasi-50.vue'
import Ornekbirim24 from './components/birimler/ornek-birim-24.vue'
import Ornekbirim25 from './components/birimler/ornek-birim-25.vue'
import Ornekbirim26 from './components/birimler/ornek-birim-26.vue'
import Devamedenproje from './components/projeler/devameden/1.vue'
import Planlananproje from './components/projeler/planlanan/1.vue'
import Tamamlananproje from './components/projeler/tamamlanan/1.vue'

export const routes = [
    { path : '/', component : Index },
    { path : '/kentrehberi', component : Kentrehberi },
    { path : '/projeler', component : Projeler },
    { path : '/home/baskan', component : Baskan },
    { path : '/home/baskanalbum', component : Baskanalbum },
    { path : '/home/baskanasor', component : Baskanasor },
    { path : '/home/baskanmesaji', component : Baskanmesaji },
    { path : '/home/baskanyardimcilari', component : Baskanyardimcilari },
    { path : '/home/belgeornekleri', component : Belgeornekleri },
    { path : '/home/birfikrimvar', component : Birfikrimvar },
    { path : '/home/birimler', component : Birimler },
    { path : '/home/duyurular', component : Duyurular },
    { path : '/home/encumenler', component : Encumenler },
    { path : '/home/eskibaskanlar', component : Eskibaskanlar },
    { path : '/home/faaliyetraporlari', component : Faaliyetraporlari },
    { path : '/home/galeri', component : Galeri },
    { path : '/home/iletisim', component : Iletisim },
    { path : '/home/isteksikayet', component : Isteksikayet },
    { path : '/home/komisyonkararlari', component : Komisyonkararlari },
    { path : '/home/mecliskararlari', component : Mecliskararlari },
    { path : '/home/meclisuyeleri', component : Meclisuyeleri },
    { path : '/home/misyonvizyon', component : Misyonvizyon },
    { path : '/home/muhtarlar', component : Muhtarlar },
    { path : '/home/sehitlerimiz', component : Sehitlerimiz },
    { path : '/home/tarihce', component : Tarihce },
    { path : '/home/vefatedenler', component : Vefatedenler },
    { path : '/home/videogaleri', component : Videogaleri },
    { path : '/haberler/1', component : Haber1 },
    { path : '/haberler/1-2', component : Haber1_2 },
    { path : '/haberler/belediye-kultur-evi-hizmete-girdi-21', component : Haberbelediyekultur },
    { path : '/haberler/belediye-otoparkimiz-hizmete-girdi-16', component : Haberbelediyeotopark },
    { path : '/haberler/mobil-uygulamamiz-yayinda-160', component : Habermobiluygulama },
    { path : '/haberler/robotik-kodlama-dersleri-basliyor-15', component : Haberrobotikkodlama },
    { path : '/haberler/turistler-ilcemizi-artik-daha-cok-seviyor-159', component : Haberturist },
    { path : '/home/duyurudetay/58', component : Duyurudetay58 },
    { path : '/home/duyurudetay/59', component : Duyurudetay59 },
    { path : '/home/duyurudetay/60', component : Duyurudetay60 },
    { path : '/home/duyurudetay/61', component : Duyurudetay61 },
    { path : '/home/duyurudetay/62', component : Duyurudetay62 },
    { path : '/home/yararlilinkler', component : Yararlilinkler },
    { path : '/home/yenidoganlar', component : Yenidoganlar },
    { path : '/etkinlikler/1', component : Etkinlik1 },
    { path : '/etkinlikler/1-2', component : Etkinlik1_2 },
    { path : '/etkinlikler/belediyemiz-konser-duzenliyor-52', component : Etkinlikkonser },
    { path : '/etkinlikler/bir-fidan-bir-hayat-51', component : Etkinlikfidan },
    { path : '/etkinlikler/cocuk-senligi-53', component : Etkinlikcocuksenlik },
    { path : '/etkinlikler/satranc-turnuvasi-50', component : Etkinliksatranc },
    { path : '/birimler/ornek-birim-24', component : Ornekbirim24 },
    { path : '/birimler/ornek-birim-25', component : Ornekbirim25 },
    { path : '/birimler/ornek-birim-26', component : Ornekbirim26 },
    { path : '/projeler/devameden/1', component : Devamedenproje },
    { path : '/projeler/planlanan/1', component : Planlananproje },
    { path : '/projeler/tamamlanan/1', component : Tamamlananproje },
    
];
