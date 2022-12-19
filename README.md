## Next.js Ver13操作デモ(2022/12/19)
色々試した結果をここに記しておきます。
参考はこちら⇒https://beta.nextjs.org/docs/upgrade-guide
### appディレクトリについて
- appディレクトリはSSRである。
- appディレクトリ配下がルートディレクトリとなるが、pages配下も引き続き使えるため競合するとエラーとなります。
next.config内に
  experimental: {
    appDir: true,
  },
の設定が必要。
- layoutコンポーネントはこれまでの用途と同様

### 課題
とりあえず動いてはいるが、エラーが出ています。
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
⇒追々この解決法を確認したいところです。