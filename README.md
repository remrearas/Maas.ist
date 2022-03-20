﻿# Maas.ist Lightweight Angular Maaş Hesaplama Uygulaması

Maas.ist uygulaması, lightweight (hafif) ve işlevsel olmak için yaratılmıştır. Buna ek, sade ve anlaşılır kod bütünlüğüne sahip olması sizin kolay geliştirmeniz ve kendi yapınız üzerinde en kısa sürede yer kazandırmanız anlamına gelir.

***Neler yapabilir ?***
 - *Türkiye Cumhuriyeti Sosyal Güvenlik Kurumu (SGK) tarafından belirlenen yıldan yıla değişen verilere göre Brütten Nete/Netten Brüte maaş hesaplaması*
 - *Aylık/Saatlik ve Detaylı Aylık/Saatlik maaş girişi sayesinde detaylı hesaplama*
 - *Raporları CSV/JSON formatında dışa aktarabilme*
 - *Aylık detaylı raporları görüntüleme*  

***Sizin için avantajları;***

 - *Geliştirici dostu ***sade&anlaşılır*** yapı*
 - *Dinamik çalışan servisinize entegre etmeniz için gereken yapısal düzen*
 - *Arka tarafta hesaplamak için çalışan herhangi bir servis olmaması ve bütün hesaplamaların kullanıcı tarayıcısı üzerinden yapılması*
 - *Tam anlamıyla mobil uyumlu duyarlı (responsive) arayüz tasarımı*
 - *Kullanıcının ihtiyaçları doğrultusunda tasarlanan üstün kullanıcı deneyimi*
 - *Aşırı hafif olmasından dolayı Gtmetrix ve Google Pagespeed tarafından tam puan* 

![enter image description here](https://raw.githubusercontent.com/remrearas/Maas.ist/dev/gh-assets/google-pagespeed.png)

![enter image description here](https://github.com/remrearas/Maas.ist/raw/dev/gh-assets/gtmetrix.png)

# Demo

Uygulamayı canlı olarak Github Pages üzerinde barındırılan aşağıdaki bağlantıya tıklayarak deneyebilirsiniz.

*https://remrearas.github.io/Maas.ist/*

## Geliştirme Ortamınız Üzerine Kurulumu

Bu uygulama bir Angular CLI uygulamasıdır. O yüzden kendi ortamınız üzerinde çalıştırmadan önce Angular CLI gereksinimlerini kontrol etmelisiniz. (*https://angular.io/guide/setup-local*)

İlk önce Github deposunu kendi ortamınıza çekmelisiniz. Bunun için;

    git clone https://github.com/remrearas/Maas.ist.git

Sonrasında uygulamanın olduğu dizine gelip, gerekli npm paketlerini kurmalısınız. Bunun için;

    npm install
Bu aşamaya kadar başarıyla tamamladıysanız uygulamayı kendi yerel ortamınızda çalıştırabilirsiniz. Bunun için;

    ng serve

## Derleme Süreci ve Derleme Optimizasyonu

Üretim (Production) aşamasına gelen uygulamanızı derlemek için aşağıdaki adımları uygulamasınız. Bu adımlar normal inşa adımlarına ek CSS optimizasyonu sürecini içerir. Kullanılmayan CSS'i kaldırmanız uygulamanızı hafifletir ve rahat bir kullanıcı deneyimi sağlar. 

İlk önce uygulamamızı derliyoruz.

    ng build
veya

    ng build --base-href=<URL>
Sonrasında fazla CSS'i optimize etmek için aşağıdaki komutu çalıştırıyoruz.

    npm run postbuild
Başarıyla tamamlandıktan sonra kullanılmayan CSS'in ne kadar boyutta olduğunu komut konsolunuzda görüntüleyebilirsiniz.  Bu adımlara kadar başarıyla tamamladıysanız /dist dizininde oluşan uygulamanızı yüklemeye hazırsınız demektir.

## Uygulama Hiyerarşik Düzeni ve Tanımlamaları

Uygulamanın temel parçalarını inceleyecek olursak ilk önce hiyerarşik düzeni kontrol etmemiz gerekir. Bu düzen aşağıdaki gibidir;

- [**includes**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes)  
  - [**guards**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/guards)  
  - [**helpers**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/helpers)  
  - [**resolvers**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/resolvers)  
  - [**services**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/services)  
  - [**stores**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/stores)  
      - [**forms**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/stores/forms)  
      - [**parameters**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/stores/parameters)  
      - [**results**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/includes/stores/results)  
- [**pages**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages)  
  - [**calculation**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation)  
      - [**form**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation/form)  
          - [**components**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation/form/components)  
              - [**meta-form**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation/form/components/meta-form)  
              - [**wage-form**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation/form/components/wage-form)  
      - [**results**](https://github.com/remrearas/Maas.ist/tree/dev/src/app/pages/calculation/results)

****includes*** içerisinde bileşenlerin çalıştırdığı servisleri ve depoları (store) içerir.* 
****pages*** bileşenlerin sayfalarını ve bileşen formlarını içerir.*




