---
layout: post
title: 'Twitter Thread Summarizer'
date: 2023-04-03
excerpt:  Build a Twitter Thread Summarizer Web App with SNSCrape, LangChain, and OpenAI
---

Aplikasi web ini membantu merangkum thread Twitter dengan mengekstrak konten thread dan menghasilkan ringkasan yang singkat dan dalam kalimat yang mudah dipahami. Dalam pengembangannya, aplikasi ini memanfaatkan teknologi Large Language Model (LLM) yang mampu memahami konteks bahasa manusia dan menghasilkan teks yang lebih natural. Dengan aplikasi ini, kamu bisa dengan mudah membaca thread Twitter tanpa harus membaca satu persatu tweetnya. 

<div class="img-container">
    <figure>
        <img src="assets/images/source-tweet.png" alt="Twitter Thread" style="width:100%"/>
        <figcaption>Original Twitter Thread</figcaption>
    </figure>
    <figure>
        <img src="assets/images/summarized-tweet.png" alt="Summarized Twitter Thread" style="width:100%"/>
        <figcaption>Summarized Twitter Thread</figcaption>
    </figure>
</div>

<style>
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 20px 0;
    }

    .img-container figure {
        margin: 10px;
        text-align: center;
        width: 40%;
    }

    .img-container figcaption {
        margin-top: 10px;
        font-style: italic;
        font-size: 14px;
    }
</style>

Aplikasi ini dibuat menggunakan SNScrape, LangChain, dan OpenAI model untuk summarizernya. Kalau mau coba aplikasinya, bisa langsung klik di link [ini](https://bit.ly/3Kt3yIK) atau bisa kunjungi link [ini][https://github.com/datawithalvin/chains-llm-app) untuk lihat source codenya.