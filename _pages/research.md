---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---
The research in my group strives to develop theories that make machine learning applicable in real-world large scale engineering systems. Our research is interdisciplinary in nature where we develop new mathematical tools in machine/reinforcement learning, control theory, optimization, network science and apply these tools to cyber physical systems, power systems, transportation systems, robotics and beyond, with provable performance and resilience guarantee. 

Some of research projects are listed below. 

**Learn to Stabilize** 

Machine learning has been applied to control systems to learn to control an unknown system with provable performance guarantee (e.g. regret, competitive ratio). However, in addition to performance, an equally important property of control systems is *stability*, without which there is no performance to even talk about. In this project, we investigate the ``learn to stabilize'' problem for an unknown system, and study fundamental questions like sample complexity. 

- Yang Hu, Adam Wierman, Guannan Qu, On the Sample complexity of stabilizing LTI systems on a Singlle Trajectory, NeurIPS 2022 ([link](https://arxiv.org/abs/2202.07187))

**Learning and Control for Networked Systems**

Reinforcement Learning (RL) has achieved many sucess in single-agent systems, but its application to large scale networked systems face a major obstacle: scalability. Put more concretely, the scalibity issue lies in that the state or action space of such networked systems can be exponentially large in the number of nodes. In this project, we investigate how we can use the network structure to make RL scalable for networked systems. 

- Guannan Qu, Adam Wierman, Na Li, Scalable Reinforcement Learning for Multi-Agent Networked Systems, Operations Research 2021 ([link](https://arxiv.org/abs/1912.02906))
- Guannan Qu, Yiheng Lin, Adam Wierman, Na Li, Scalable Multi-Agent Reinforcement Learning for Networked Systems with Average Reward, NeurIPS 2020 ([link](https://proceedings.neurips.cc//paper/2020/file/168efc366c449fab9c2843e9b54e2a18-Paper.pdf))
- Yiheng Lin, Guannan Qu, Longbo Huang, Adam Wierman, Multi-Agent Reinforcement Learning in Stochastic Networked Systems, NeurIPS 2021. ([link](https://arxiv.org/abs/2006.06555))
- Yizhou Zhang\*, Guannan Qu\*, Pan Xu\*, Yiheng Lin, Zaiwei Chen, Adam Wierman, [Global Convergence of Localized Policy Iteration in Networked Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2211.17116), ACM SIGMETRICS 2023. (\* equal contribution)

As an application, we have also applied RL to power systems. 

- Review paper on RL for power systems ([link](https://arxiv.org/abs/2102.01168))
- Stable RL for voltage control ([link](https://arxiv.org/abs/2109.14854))

Even without learning, the control of a networked systems is already a challenging problem. To that end, I have developed fundamental theories regarding how to design distributed algorithms for control and optimization of networked systems using only local information and local communication. 

- Sungho Shin, Yiheng Lin, Guannan Qu, Adam Wierman, Mihai Anitescu, [Near-Optimal Distributed Linear-Quadratic Regulator for Networked Systems](https://arxiv.org/pdf/2204.05551.pdf), accepted to SIAM Journal on Control and Optimization. 
- Yiheng Lin, Judy Gan, Guannan Qu, Yash Kanoria, Adam Wierman, [Decentralized Online Convex Optimization in Networked Systems](https://proceedings.mlr.press/v162/lin22c/lin22c.pdf), ICML 2022.
- Guannan Qu and Na Li, [Accelerated Distributed Nesterov Gradient Descent](https://arxiv.org/abs/1705.07176), *IEEE Transactions on Automatic Control*, vol. 65, no. 6, pp. 2566 - 2581, June 2020.
- Guannan Qu and Na Li, [Harnessing Smoothness to Accelerate Distributed Optimization](https://arxiv.org/abs/1605.07112), *IEEE Transactions on Control of Network Systems*, vol. 5, no. 3, pp. 1245-1260, Sept. 2018.


**Model Predictive Control**

Model Prediction Control (MPC) is one of the most popular and flexible controller design approaches, yet its performance guarantee has long been not well understood, particularly when it comes to time-varying systems and systems with constraints. In this project, we propose a general perturbation analsyis framework that bounds the regret of MPC.  

- Yiheng Lin, Yang Hu, Guanya Shi, Haoyuan Sun, Guannan Qu, Adam Wierman,
Perturbation-based regret analysis of predictive control in linear time varying systems, NeurIPS 2021 ([link](https://arxiv.org/pdf/2106.10497.pdf))

- Yiheng Lin, Yang Hu, Guannan Qu, Tongxin Li, Adam Wierman, Bounded-regret MPC via perturbation analysis: prediction error, constraints, and nonlinearity, NeurIPS 2022. 



**Bridging Model-based and Model-Free Methods**

Traditional controller synthesis typicalls starts with a first-princeples model and designs a controller with provable stability and robustness guarantee. In contrast, recent RL approaches do not assume a model and learns a controller (often times neural network based) in a data driven manner, which experimentally can perform well even for complex dynamical systems. However, the RL approach is often data and computation heavy, requires extensive tuning, and lacks provable guarantess. In this project, we seek to combine both approaches and achieve the best of both worlds. 

- Guannan Qu, Chenkai Yu, Steven Low, Adam Wierman, Exploiting Linear Models for Model-Free Nonlinear Control: A Provably Convergent Policy Gradient Approach ([link](https://arxiv.org/pdf/2006.07476))

- Tongxin Li, Ruixiao Yang, Guannan Qu, Guanya Shi, Chenkai Yu, Adam Wierman, Steven Low, Robustness and Consistency in Linear Quadratic Control with Predictions , ACM SIGMETRICS 2022 ([link](https://arxiv.org/pdf/2106.09659.pdf)).



**Application: power systems**

Many of our research is inspired by applications in power systems, particularly distributed control and coordination of distributed energy resources. Here is a list of relevant power system publications. 

- Xin Chen, Guannan Qu, Yujie Tang, Steven Low, Na Li, Reinforcement Learning for Decision-Making and Control in Power Systems: Tutorial, Review, and Vision, accepted to IEEE Transactions on Smart Grid. ([link](https://arxiv.org/abs/2102.01168))

- Yuanyuan Shi*, Guannan Qu*, Steven Low, Anima Anandkumar, Adam Wierman, Stability Constrained Reinforcement Learning for Real-Time Voltage Control , American Control Conference 2022. (* denotes equal contribution)
 ([link](https://arxiv.org/abs/2109.14854))
 
- Guannan Qu and Na Li, Optimal Distributed Feedback Voltage Control under Limited Reactive Power, IEEE Transactions on Power Systems, vol. 35, no. 1, pp. 315 - 331, January 2020.

- Sindri Magnússon, Guannan Qu and Na Li, Distributed Optimal Voltage Control with Asynchronous and Delayed Communication, IEEE Transactions on Smart Grid, vol. 11, no. 4, pp. 3469 - 3482, July 2020.

- Sindri Magnússon, Guannan Qu, Carlo Fischione, Na Li, Voltage Control Using Limited Communication, IEEE Transactions on Control of Network Systems, vol. 6, no. 3, pp 993-1003, Sept. 2019.

- Niloy Patari, Anurag K Srivastava, Guannan Qu, Na Li, Distributed Voltage Control for Three-Phase Unbalanced Distribution Systems with DERs and Practical Constraints, accepted to IEEE Transactions on Industry Applications.

- Xiaoqi Tan, Guannan Qu, Bo Sun, Na Li, and Danny H.K. Tsang, Optimal Scheduling of Battery Charging Station Serving Electric Vehicles Based on Battery Swapping, IEEE Transactions on Smart Grid, vol. 10, no. 2, pp. 1372-1384, March 2019.



**Optimization Theory**

  - Distributed optimization, particularly the analysis of the gradient tracking idea ([link](https://arxiv.org/pdf/1605.07112.pdf)) and its accelerated version ([link](https://arxiv.org/pdf/1705.07176.pdf))
  - Exponential stability (aka linear convergence) of the primal-dual gradient algorithm ([paper1](https://arxiv.org/pdf/1803.01825.pdf), [paper 2](https://arxiv.org/pdf/1903.09580.pdf))

