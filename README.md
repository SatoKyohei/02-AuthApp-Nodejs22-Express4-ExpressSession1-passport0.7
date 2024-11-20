## 写経
[Node.js ＋ Express ＋ Passport を使ってみた](https://qiita.com/tinymouse/items/fa910bf80a038c7f9ccb)

<br/>
<br/>

## 技術スタック

- Nodejs v22
- Express v4
- ExpressSession v1
- passport v0.7

<br/>
<br/>

## 実行したコマンド（順不同）

- npm init
- npm i express passport passport-local body-parser express-session

<br/>
<br/>

## 学べる点

- passport を使った簡単な認証の実装

<br/>
<br/>

## 使用した外部サービス

- なし

<br/>
<br/>

## 他

- この記事はリファレンス的な記事なので、上から下まで実施すると自然と出来上がっているものではないので注意
    - たとえば以下のように詳細な実装には踏み込まない記述が多い
    ```javascript
    if (なんらかのエラー) {
        return done(エラー内容);
    } else if (失敗) {
        return done(null, false);
    } else if (成功) {
        return done(null, username);
    }

    res.redirect('/◇◇');
    ```
