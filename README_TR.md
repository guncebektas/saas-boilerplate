 <h1 align="center">
  SaaS Boilerplate Kurulum ve Kullanımı
</h1>

### Giriş
Meteor.js, MongoDB, Redis, React, Tailwind and FlowBite UI kullanıyoruz.
Meteor.js 'e yaklaşımımızda bazı küçük farklılıklar var. Ancak Meteor.js'i kendi dökümantasyonundan öğrenmek katkıda bulunmaya mani değildir.

### Gereklilikler
- NVM'i kurun.
- Node.js'i kurun ( versiyon 14.x'den yüksek versiyonlar desteklenmemektedir.).
- [Meteor.js](https://www.meteor.com/developers/install)'i kurun.
- [Docker](https://docs.docker.com/install) ve [Docker Compose](https://docs.docker.com/compose/install/) kurulmuş ve çalışır olması gerekir.

### Geliştirici ortamı
Geliştirici ortamı için Mongodb (replica set) ve redis.

```bash 
npm run dev-env
```
Docker imajı ayağa kalkınca uygulamayı çalıştır.
(Docker engine çalışıyor olmalı.)

```bash 
npm run start
```
Redis-oplog devredışı bırakıldıktan sonra mongodbnin gömülü komutu olan `meteor` komutu uygulamayı çalıştırmak için kullanılabilir.


Canlı ortamı simule etmek için

```bash 
npm run simulate-production
```

### Test
```bash 
npm run test
```

```bash 
npm run cypress
```

### Canlıya alma
Canlıya almak için "mup" kullanıyoruz bu nedenle .deploy dosyasını kontrol edin.

```bash 
npm run deploy
```
