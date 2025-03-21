<img width="1440" alt="スクリーンショット 2024-10-25 19 08 15" src="https://github.com/user-attachments/assets/fa6fcf27-63b6-4a08-a9b6-d7d16a669593" />

# ショーケースアプリ

## 概要

このプロジェクトでは、ショーケースアプリを構築します。

特定のトピックを紹介するサイトから、個人のポートフォリオまで、
幅広い活動ができるような、GitHub リポジトリのまとめサイトです！

## 学習目標

Next.js + GitHub API + Supabase など、複数の技術を組み合わせた、実践的な MVP を構築します！

### 推奨技術

このプロジェクトの難易度と趣旨を踏まえて、以下の使用をお勧めします。

- Next.js v15/ App Router
- TypeScript による型チェック
- Tailwind CSS を用いたスタイリング
- shadcn/ui を用いた UI の実装
- GitHub API の活用
- Supabase を使用したデータベース連携
- React 19/ Actions によるデータの更新
- Cloudflare Pages へのデプロイ

---

## 🎯 お題

- 「ユーザーストーリー」を全て満たすアプリを構築してください。
- 必要に応じて、スクリーンショットやデモサイトの URL を参照してください。
- スタイルは、あなた自身で独自にカスタマイズすることが可能です。

### 必須機能

1. **コンテンツ一覧を表示**:
   - まとめサイトのコンテンツ（リポジトリ）を一覧で表示
   - トピックごとに、フィルタリングできる機能
2. **コンテンツ詳細を表示**:
   - コンテンツの詳細情報（README.md）を表示
   - GitHub の、リポジトリとデモサイトへリンクを貼る
   - ログイン不要の、コンテンツに対するリアクション機能
   - GitHub リポジトリの URL 構造に合わせて、「`Domain.com/オーナー名/リポジトリ名`」という URL 構成にする

## ユーザーストーリー

- **TOP ページ：**
  - [ ] ユーザーがサイトにアクセスすると、コンテンツ一覧を閲覧できる
  - [ ] トピックのボタンを押すと、一致するコンテンツのみが表示される
  - [ ] 個別のコンテンツをクリックして、詳細ページに遷移できる
- **コンテンツ詳細ページ**:
  - [ ] ユーザーは各コンテンツの詳細情報（README.md）を確認できる
  - [ ] GitHub と同じ「`Domain.com/オーナー名/リポジトリ名`」という URL の構造になっている
  - [ ] 外部リンクへのボタンをクリックして、GItHub のリポジトリ・デモサイトに遷移できる
  - [ ] コンテンツに対する、リアクションの総数を確認することができる
  - [ ] 誰でもログインせずに、コンテンツに対して絵文字でリアクションすることができる
  - [ ] 誰でもログインせずに、コンテンツに対するリアクションを削除することができる
  - [ ] 「いいね」数の複数インクリメントなどの不正操作は、許容する方針で、済ませること
- **その他：**
  - [ ] アプリケーションがデプロイされており、誰でもアクセス可能である。
