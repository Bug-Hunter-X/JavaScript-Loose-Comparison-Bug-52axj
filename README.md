# JavaScript Loose Comparison Bug

This repository demonstrates a common but subtle bug in JavaScript related to loose comparison (using `==` instead of strict comparison `===`).

## The Bug

The `foo` function uses a loose comparison (`==`) to check if `a` is equal to 1. This can lead to unexpected behavior when `a` is a value that is loosely equal to 1, but not strictly equal (e.g., the string '1').

## The Solution

The solution involves changing the loose comparison (`==`) to a strict comparison (`===`).  Strict comparison checks for both value and type equality, preventing this kind of unexpected behavior.