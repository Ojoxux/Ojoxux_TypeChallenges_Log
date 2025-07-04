/*
  533 - Concat
  -------
  by Andrey Krasovsky (@bre30kra69cs) #初級 #array

  ### 質問

  JavaScript の`Array.concat`関数を型システムに実装します。この型は 2 つの引数を受け取り、受け取ったイテレータの要素を順に含む新しい配列を返します。

  例えば：

  ```ts
  type Result = Concat<[1], [2]>; // expected to be [1, 2]
  ```

  > GitHubで確認する：https://tsch.js.org/533/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyConcat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]