---
layout: article-layout.11ty.js
date: 2022-07-19
title: "Ubieに入社して4ヶ月が経ちました"
tags: post
---

医療 AI スタートアップ [Ubie(ユビー)](https://ubie.life) に 3 月に入社していました。この 7 月で入社してから 4 ヶ月になります。本当はもっと早く入社エントリを書きたかったのですが、だらけていたらなんと 4 ヶ月経ってしまいました。

<figure>
<img style="border: 1px solid gray" src="/img/joined-ubie.png" width="595" height="188" alt="今日からUbie Discoveryで働くことになりました！！大学やOSSは続けていく予定です！！"/>
<figcaption><a href="https://twitter.com/__sosukesuzuki/status/1500636266068852736">入社ツイート</a></figcaption>
</figure>

## 誰？

JavaScript やフロントエンドを触っているエンジニアです

これまでは筑波大学の情報学群情報科学類(学部)に通いつつ業務委託として働いたり、Prettier や Babel などのオープンソースプロジェクトのメンテナーやコミッターをやったりしていました。

より興味がある人は[2021 年の振り返りブログ](https://sosukesuzuki.dev/posts/2021/)や、[私の Twitter](https://twitter.com/__sosukesuzuki) を見ていただけると良いと思います(Twitter には日常的なことを書き込まないようにしているのでどういうエンジニアなのかはわかりやすいと思います)。

## Ubie って？

Ubie は 2017 年にエンジニアの[久保](https://twitter.com/quvo_ubie)と医師の[阿部](https://twitter.com/Ive0209)が創業したスタートアップです。ウェブサイトは https://ubie.life です。生活者向けの[症状検索エンジン ユビー](https://ubie.app)や医療機関向けの[ユビー AI 問診](https://intro.dr-ubie.com/) などを提供しています。

## なんで就職したの？

Ubie は私にとって初めての正社員としての勤務先です。つまり、転職ではなく就職です。

私が Ubie に就職した理由は大きく分けて 3 つあります。

1 つめは、医療というドメインは難しくて、楽しそうで、意義があるものだと思ったからです。医療はすでにたくさんの頭の良い人々が参入しているにも関わらず山積みの課題があり、それを解消することが多くの人に良い影響を与えるドメイン領域だと思います。エンジニアとして、そういった難しくかつ意義のあるドメインに対して仕事をするのは楽しそうだと思いました。

2 つめは、一生懸命働く体験をしてみたかったからです。一生懸命に働いている人と、同じ立場で、大きな目標に向かって一生懸命に働くということに対する憧れがありました。これまでもインターンや業務委託として働いていましたが、それだと当事者意識を持つのが難しく、少なくとも 1 回は一生懸命に働いてみたい！と思っていました。

3 つめは、Ubie に対して良い印象を持っていたからです。後述しますが私は過去にインターンや業務委託として Ubie で働いていたことがあります。また Ubie はその独特な組織設計や評価についての考え方などを積極的に発信しています。私自身の経験と、Ubie の対外的な情報から、少なくとも自分にとって納得できそうな「意思決定への姿勢」を持った会社だと感じました。

## 前も Ubie で働いてなかった？

以前から私と交流をしていてくれた方は「あれ、前も Ubie で働いてなかった？」と思うかもしれません。実は私は正社員として入社する前に Ubie でインターンと業務委託として働いていました。

2018 年の 12 月から 2020 年の 5 月までの間はインターンとして働いていました。高校生のときに勉強会をきっかけに知り合った[たろうさん](https://twitter.com/ngsw_taro)さんから誘ってもらってインターンとして働き始めました。2020 年 5 月に「もっと Web 技術に強い人と一緒に働きたいな！」と思いインターンを辞めました(当時の Ubie には Web 技術に詳しい人が少なかった)。

2021 年 4 月から 2022 年 2 月までの間は業務委託として働いていました。同僚の [yukukotani](https://twitter.com/yukukotani) が zenn に書いていたのですが、Ubie では 2021 年の 4 月から https://ubie.app を Nuxt.js から Next.js に移行する作業が行われていました。

https://zenn.dev/yuku/articles/a9edd53e13bb26

そのお手伝いのために業務委託として再び働き始めました。この記事中に出てくる

> 以前に業務委託をしてくれていてフロントエンドに詳しくて仲が良い友人

というのが私です。移行作業が終わったあとはパフォーマンスチューニングやビルド改善などのフロントエンド周りの改善をやっていました。

## この 4 ヶ月は何をやっていたの？

入社してすぐは、業務委託として行っていた仕事の続きのような形で https://ubie.app のフロントエンドの改善を行っていました。リファクタリング、パフォーマンスチューニング、ビルド改善、コードレビューなどです。しばらくしてから、もっと抜本的な設計の改善が必要だということで静的解析や GraphQL の Fragment Colocation を使ったフロントエンドの設計や PoC 実装を行っていました。

ここ 2 ヶ月の間は、事業上の理由と Ubie のシステムのより広い部分を触って把握しておきたいという自分の理由から、複数のシステムが絡む製薬事業の開発を行っています。得意ではないバックエンド開発をやったり、初歩的なデータ分析のための SQL を書いたり、もちろんフロントエンドも書いたりと技術的にはいろんなことをやっています。

## 4 ヶ月働いてみてどう？

技術的、組織的な色々な課題はありつつも楽しく働けています。

特に、データエンジニアと近い距離で働けるのが新鮮で楽しいと感じています。これまではフロントエンドやバックエンドのエンジニアやデザイナーと一緒に働くことがほとんどでした。データエンジニアの人たちは、自分が今まで一緒に働いたことのある職種の人たちとはまた違った視点で物事を見ていて、そのような視点は Ubie でのプロダクト開発においては重要です。また、個人としてデータエンジニアリングの技術に強い興味が湧いてきました。最近は会社のデータエンジニアに色々聞きつつ勉強しています。

また入社のモチベーションの一つであった「一生懸命働く体験をしてみたい」というのも今のところは達成できていそうです。これから時間が経っていくにつれて考え方が変わっていくとは思いますが現段階では、当事者意識を持って一生懸命働くことに対して素直に楽しいと感じています。

## オープンソースはどうするの？

続けます。趣味なので。最近 https://sosukesuzuki.dev/posts/2022-maintainer-month/ に書いたように、強いやる気があるわけではないものの最低限の OSS 活動は続けています。なので私の就職に伴って Prettier のアップデートが滞るということはないはずです(もし滞ってしまったら世の中が dprint や deno fmt、Rome Formatter に移行しはじめる気がするのでそれはそれで良いかもしれません)。

## 大学はどうするの？

続けます。せっかく入学できたので時間がかかっても卒業はしたいと考えています。最近は線形代数や微分積分と戦っています。

## 他の仕事はどうするの？

Ubie に入社したにも関わらず https://cybozu.github.io/frontend-expert に記事を書いているのを見て不思議に思った方もいるかもしれません。サイボウズではまだ副業の業務委託として仕事を継続させてもらっています。今後も継続したいと考えているので、良い働き方を模索中です。

## We are hiring!!

一緒に働いてくれる仲間を募集しています。興味がある方は Twitter 等で連絡をください！

[Ubie Discovery 採用サイト](https://recruit.ubie.life/)