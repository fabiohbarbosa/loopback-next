---
lang: en
title: 'Migrating remoting hooks'
keywords: LoopBack 4.0, LoopBack 4, LoopBack 3, Migration
sidebar: lb4_sidebar
permalink: /doc/en/lb4/migration-models-remoting-hooks.html
---

TODO: Explain how to migrate remoting hooks to LB4 interceptors.

- Global hooks, e.g. `app.beforeRemote('**', handlerFn)`
- Model-level hooks, e.g. `app.beforeRemote('User.**', handlerFn)`
- Method-level hooks, e.g. `User.beforeRemote('create', handlerFn)`

Explain how to map properties provided by LB3 remoting context to LB4 concepts
and how to access that data via Dependency Injection.
