# chess

## Introduction

This is a remake of the chess program I made this summer. It will probably contain a lot of the same code and structure, but with a few key differences that will make this faster to develop, and a full-stack project. I will therefore develop the back-end using a javascript framework using node or deno. The back-end will utilize WebSocket, and all the chess logic. The front-end wil therefore only be used to display the board state. I think that most of the front-end work is aready done, while the logic of the back-end will need a few updates to make a better developer experience. I am making this new repo because 1) the project seemed big enough to get it's own repo, 2) because it suffered from technical debt, and I did not want to massacre my boy in his own repo and 3) because I wanted to implement WebSockets, which would entail a lot of rewriting anyways. Further updates in this README-file will be done in a blog-like fashion, so that I can share my thoughts throughout the development process.

## What this will do better than my previous project, 20.10;

Here are some things that annoyed me during my previous implementation of chess

### #1 Special moves was tedious

Coding moves such as en Passant, Castling and promotions worked, but they were quite tedious to implement. I want a system where implementing such special moves are better from a developer perspective, and such easier to do more robust. I therefore want a system where pieces can more easily "see" other pieces relative to itself, and be able to move two pieces in one move (for castling). Also, we will need some sort of popup-event for promotions of pawns.

### #2 Manual testing sucks

I spent way to much time moving pieces in order to get a check-mate. Doing it once is of course ok, but I want to automate testing. You would almost think that these professors and senior devs talking about testing actually were onto something

That said, here is my planned architecture for this project

![Alt text](images/api_diagram.png)

The server will handle all the logic for in the game. This is to ensure that both players have the same state in the game, and for security reasons, so that one cant run a hacked version of the game. Chess is also simple enough for the computer to handle the needed calculations without any percieved delays. The front-end will send back the decision of the players.
