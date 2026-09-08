# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\signup-registration.spec.ts >> Registration Specification Tests >> TC-REG-002: Verify user can register Legal Entity successfully
- Location: tests\signup-registration.spec.ts:29:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fill')
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e15]:
          - generic [ref=e19]:
            - generic [ref=e20]:
              - heading [level=2] [ref=e21]: Buat Akun
              - heading [level=1] [ref=e22]: Selangkah lagi untuk manajemen transaksi bisnis yang mudah, aman, dan efisien.
            - list [ref=e24]:
              - listitem [ref=e25]:
                - generic [ref=e28]: Transaksi dalam dan luar negeri dalam satu platform.
              - listitem [ref=e29]:
                - generic [ref=e32]: Dipercaya 900+ perusahaan.
              - listitem [ref=e33]:
                - generic [ref=e36]: Terdaftar dan terlisensi Bank Indonesia.
              - listitem [ref=e37]:
                - generic [ref=e40]: Kirim uang ke 20.000+ penerima dalam hitungan menit.
          - generic [ref=e44]:
            - heading [level=1] [ref=e46]: Selesaikan transaksi disbursement dengan praktis hanya dalam 30 detik
            - list [ref=e48]:
              - listitem [ref=e49]:
                - generic [ref=e52]: Transfer ke hingga 20 ribu tujuan berbeda sekaligus.
              - listitem [ref=e53]:
                - generic [ref=e56]: "Pilihan transfer beragam: rekening bank, virtual account, dan e-wallet."
              - listitem [ref=e57]:
                - generic [ref=e60]: Dukungan fitur dan sistem andal serta customer support 24 jam.
              - listitem [ref=e61]:
                - generic [ref=e64]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e69]:
            - heading [level=1] [ref=e70]: Terima pembayaran dari pelanggan dengan berbagai metode secara real-time
            - list [ref=e71]:
              - listitem [ref=e72]:
                - generic [ref=e75]: Terima dana dari transfer bank, virtual account, e-wallet, dan QRIS.
              - listitem [ref=e76]:
                - generic [ref=e79]: Kustomisasi link pembayaran sesuai kebutuhan.
              - listitem [ref=e80]:
                - generic [ref=e83]: Terima dana langsung ke rekening perusahaan.
              - listitem [ref=e84]:
                - generic [ref=e87]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e91]:
            - heading [level=1] [ref=e93]: Transfer bisnis ke luar negeri lebih mudah, murah, dan cepat
            - list [ref=e95]:
              - listitem [ref=e96]:
                - generic [ref=e99]: Kirim uang ke 40+ negara lain.
              - listitem [ref=e100]:
                - generic [ref=e103]: Nilai tukar dan biaya transfer hingga 50% lebih terjangkau.
              - listitem [ref=e104]:
                - generic [ref=e107]: Proses transaksi jauh lebih cepat dibandingkan cara konvensional.
              - listitem [ref=e108]:
                - generic [ref=e111]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e116]:
            - generic [ref=e117]:
              - heading "Buat Akun" [level=2] [ref=e118]
              - heading "Selangkah lagi untuk manajemen transaksi bisnis yang mudah, aman, dan efisien." [level=1] [ref=e119]
            - list [ref=e121]:
              - listitem [ref=e122]:
                - generic [ref=e125]: Transaksi dalam dan luar negeri dalam satu platform.
              - listitem [ref=e126]:
                - generic [ref=e129]: Dipercaya 900+ perusahaan.
              - listitem [ref=e130]:
                - generic [ref=e133]: Terdaftar dan terlisensi Bank Indonesia.
              - listitem [ref=e134]:
                - generic [ref=e137]: Kirim uang ke 20.000+ penerima dalam hitungan menit.
          - generic [ref=e141]:
            - heading [level=1] [ref=e143]: Selesaikan transaksi disbursement dengan praktis hanya dalam 30 detik
            - list [ref=e145]:
              - listitem [ref=e146]:
                - generic [ref=e149]: Transfer ke hingga 20 ribu tujuan berbeda sekaligus.
              - listitem [ref=e150]:
                - generic [ref=e153]: "Pilihan transfer beragam: rekening bank, virtual account, dan e-wallet."
              - listitem [ref=e154]:
                - generic [ref=e157]: Dukungan fitur dan sistem andal serta customer support 24 jam.
              - listitem [ref=e158]:
                - generic [ref=e161]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e166]:
            - heading [level=1] [ref=e167]: Terima pembayaran dari pelanggan dengan berbagai metode secara real-time
            - list [ref=e168]:
              - listitem [ref=e169]:
                - generic [ref=e172]: Terima dana dari transfer bank, virtual account, e-wallet, dan QRIS.
              - listitem [ref=e173]:
                - generic [ref=e176]: Kustomisasi link pembayaran sesuai kebutuhan.
              - listitem [ref=e177]:
                - generic [ref=e180]: Terima dana langsung ke rekening perusahaan.
              - listitem [ref=e181]:
                - generic [ref=e184]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e188]:
            - heading [level=1] [ref=e190]: Transfer bisnis ke luar negeri lebih mudah, murah, dan cepat
            - list [ref=e192]:
              - listitem [ref=e193]:
                - generic [ref=e196]: Kirim uang ke 40+ negara lain.
              - listitem [ref=e197]:
                - generic [ref=e200]: Nilai tukar dan biaya transfer hingga 50% lebih terjangkau.
              - listitem [ref=e201]:
                - generic [ref=e204]: Proses transaksi jauh lebih cepat dibandingkan cara konvensional.
              - listitem [ref=e205]:
                - generic [ref=e208]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e213]:
            - generic [ref=e214]:
              - heading [level=2] [ref=e215]: Buat Akun
              - heading [level=1] [ref=e216]: Selangkah lagi untuk manajemen transaksi bisnis yang mudah, aman, dan efisien.
            - list [ref=e218]:
              - listitem [ref=e219]:
                - generic [ref=e222]: Transaksi dalam dan luar negeri dalam satu platform.
              - listitem [ref=e223]:
                - generic [ref=e226]: Dipercaya 900+ perusahaan.
              - listitem [ref=e227]:
                - generic [ref=e230]: Terdaftar dan terlisensi Bank Indonesia.
              - listitem [ref=e231]:
                - generic [ref=e234]: Kirim uang ke 20.000+ penerima dalam hitungan menit.
          - generic [ref=e238]:
            - heading [level=1] [ref=e240]: Selesaikan transaksi disbursement dengan praktis hanya dalam 30 detik
            - list [ref=e242]:
              - listitem [ref=e243]:
                - generic [ref=e246]: Transfer ke hingga 20 ribu tujuan berbeda sekaligus.
              - listitem [ref=e247]:
                - generic [ref=e250]: "Pilihan transfer beragam: rekening bank, virtual account, dan e-wallet."
              - listitem [ref=e251]:
                - generic [ref=e254]: Dukungan fitur dan sistem andal serta customer support 24 jam.
              - listitem [ref=e255]:
                - generic [ref=e258]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e263]:
            - heading [level=1] [ref=e264]: Terima pembayaran dari pelanggan dengan berbagai metode secara real-time
            - list [ref=e265]:
              - listitem [ref=e266]:
                - generic [ref=e269]: Terima dana dari transfer bank, virtual account, e-wallet, dan QRIS.
              - listitem [ref=e270]:
                - generic [ref=e273]: Kustomisasi link pembayaran sesuai kebutuhan.
              - listitem [ref=e274]:
                - generic [ref=e277]: Terima dana langsung ke rekening perusahaan.
              - listitem [ref=e278]:
                - generic [ref=e281]: Akses mudah dengan integrasi API atau via dasbor intuitif.
          - generic [ref=e285]:
            - heading [level=1] [ref=e287]: Transfer bisnis ke luar negeri lebih mudah, murah, dan cepat
            - list [ref=e289]:
              - listitem [ref=e290]:
                - generic [ref=e293]: Kirim uang ke 40+ negara lain.
              - listitem [ref=e294]:
                - generic [ref=e297]: Nilai tukar dan biaya transfer hingga 50% lebih terjangkau.
              - listitem [ref=e298]:
                - generic [ref=e301]: Proses transaksi jauh lebih cepat dibandingkan cara konvensional.
              - listitem [ref=e302]:
                - generic [ref=e305]: Akses mudah dengan integrasi API atau via dasbor intuitif.
        - list [ref=e307]:
          - listitem [ref=e308] [cursor=pointer]
          - listitem [ref=e310] [cursor=pointer]
          - listitem [ref=e312] [cursor=pointer]
          - listitem [ref=e314] [cursor=pointer]
      - button [ref=e316] [cursor=pointer]:
        - img [ref=e317]: 
    - generic [ref=e320]:
      - generic [ref=e322]:
        - generic [ref=e323] [cursor=pointer]:
          - img "flag_id" [ref=e324]
          - generic [ref=e325]: id
        - generic:
          - button "flag_id Bahasa Indonesia":
            - img "flag_id"
            - generic: Bahasa Indonesia
          - button "flag_en English":
            - img "flag_en"
            - generic: English
      - generic [ref=e329]:
        - link [ref=e331] [cursor=pointer]:
          - /url: https://flip.id/business
          - img "Flip for Business Logo" [ref=e332]
        - generic [ref=e334]:
          - heading "Buat Akun Flip For Business" [level=1] [ref=e335]
          - generic [ref=e336]:
            - text: Sudah punya akun?
            - button "Masuk" [ref=e337] [cursor=pointer]
          - generic [ref=e338]:
            - generic [ref=e339]:
              - generic [ref=e340]: Nama Lengkap*
              - textbox "Masukkan nama lengkap sesuai e-KTP/Paspor" [ref=e341]: Caterina Klein
            - generic [ref=e342]:
              - generic [ref=e343]: Email*
              - textbox "Masukkan alamat email bisnis" [ref=e344]: thaddeus.lind12@test.com
            - generic [ref=e345]:
              - generic [ref=e346]: Nomor HP*
              - generic "Indonesia" [ref=e351] [cursor=pointer]:
                - img "country-ID" [ref=e352]
                - generic [ref=e353]: "+62"
              - textbox "8123456789" [ref=e357]: "85229820054"
            - generic [ref=e358]:
              - generic [ref=e359]: Tipe Bisnis*
              - generic [ref=e360]:
                - generic [ref=e362] [cursor=pointer]:
                  - radio "Perseorangan" [ref=e363]
                  - generic [ref=e365]: Perseorangan
                - generic [ref=e367] [cursor=pointer]:
                  - radio "Badan Usaha" [checked] [active] [ref=e368]
                  - generic [ref=e372]: Badan Usaha
            - generic [ref=e373]:
              - paragraph [ref=e375]: Bisnis/organisasi berbadan hukum yang dilengkapi dokumen resmi, seperti PT, PT Perorangan, CV, Yayasan, dll.
              - generic [ref=e376]:
                - generic [ref=e377]: Nama Bisnis*
                - textbox "Masukkan nama bisnis Anda" [ref=e378]
              - generic [ref=e379]:
                - generic [ref=e380]: Buat ID Flip for Business*
                - textbox "Buat ID Flip for Business Anda" [ref=e381]
            - generic [ref=e382]:
              - generic [ref=e383]: Kata Sandi*
              - img [ref=e385] [cursor=pointer]: 
              - textbox "Buat kata sandi yang aman" [ref=e387]
            - generic [ref=e388]:
              - text: Tips
              - list [ref=e389]:
                - listitem [ref=e390]: Kata sandi tidak boleh berisi data pribadi seperti nama atau email Anda.
                - listitem [ref=e391]: Gunakan minimal 8 karakter tanpa spasi.
                - listitem [ref=e392]: "Kombinasikan huruf, angka, dan karakter spesial (contoh: #$!%)."
            - generic [ref=e393]:
              - text: Dengan mendaftar, Anda menyetujui
              - link "Syarat & Ketentuan" [ref=e394] [cursor=pointer]:
                - /url: https://flip.id/business/terms-and-conditions#tnc
              - text: dan
              - link "Kebijakan Privasi" [ref=e395] [cursor=pointer]:
                - /url: https://flip.id/business/terms-and-conditions#policy
              - text: yang telah ditetapkan oleh Flip for Business.
            - button "Buat Akun" [disabled] [ref=e396]
  - generic [ref=e397]: Bantuan
```

# Test source

```ts
  1  | import { test, type Page } from '@playwright/test';
  2  | import { registrationLocators } from '../locators/RegistrationLocator';
  3  | 
  4  | export class RegistrationPage {
  5  |   readonly page: Page;
  6  |   readonly locator: ReturnType<typeof registrationLocators>;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.locator = registrationLocators(page);
  11 |   }
  12 | 
  13 |   async open() {
  14 |     await test.step('Open registration page', async () => {
  15 |       console.log('[STEP] Opening registration page');
  16 |       await this.page.goto('https://business.flip.id/signup');
  17 |     });
  18 |   }
  19 | 
  20 |   async enterFullName(fullName: string) {
  21 |     await test.step(`Enter Full Name: ${fullName}`, async () => {
  22 |       console.log(`[STEP] Entering Full Name: ${fullName}`);
  23 |       await this.locator.fullName.fill(fullName);
  24 |     });
  25 |   }
  26 | 
  27 |   async enterEmail(email: string) {
  28 |     await test.step(`Enter Email: ${email}`, async () => {
  29 |       console.log(`[STEP] Entering Email: ${email}`);
  30 |       await this.locator.email.fill(email);
  31 |     });
  32 |   }
  33 | 
  34 |   async enterPhoneNumber(phoneNumber: string) {
  35 |     await test.step(`Enter Phone Number: ${phoneNumber}`, async () => {
  36 |       console.log(`[STEP] Entering Phone Number: ${phoneNumber}`);
  37 |       await this.locator.phoneNumber.fill(phoneNumber);
  38 |     });
  39 |   }
  40 | 
  41 |   async selectBusinessType(type: 'individual' | 'legal') {
  42 |     await test.step(`Select Business Type: ${type}`, async () => {
  43 |       console.log(`[STEP] Selecting Business Type: ${type}`);
  44 |       if (type === 'individual') {
  45 |         await this.locator.individualBusinessType.check({ force: true });
  46 |       } else {
  47 |         await this.locator.legalEntityBusinessType.check({ force: true });
  48 |       }
  49 |     });
  50 |   }
  51 | 
  52 |     async enterBusinessID(businessID: string) {
  53 |     await test.step(`Enter Business ID: ${businessID}`, async () => {
  54 |         await this.locator.businessID.fill(businessID);
  55 |     });
  56 |     }
  57 | 
  58 |     async enterBusinessName(businessName: string) {
  59 |     await test.step(`Enter Business Name: ${businessName}`, async () => {
> 60 |         await this.locator.businessName.fill(businessName);
     |                                         ^ TypeError: Cannot read properties of undefined (reading 'fill')
  61 |     });
  62 |     }
  63 |   async enterPassword(password: string) {
  64 |     await test.step('Enter Password', async () => {
  65 |       console.log('[STEP] Entering Password');
  66 |       await this.locator.password.fill(password);
  67 |     });
  68 |   }
  69 | 
  70 |   async clickCreateAccount() {
  71 |     await test.step('Click Create Account button', async () => {
  72 |       console.log('[STEP] Clicking Create Account');
  73 |       await this.locator.createAccountButton.click();
  74 |     });
  75 |   }
  76 | }
```