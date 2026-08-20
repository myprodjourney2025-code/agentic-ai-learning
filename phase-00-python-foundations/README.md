# Phase 0 — Python for JS developers

Weeks 1–2 of the roadmap (`../roadmap.html`, `#phase-0`). Pure Python practice — no AI SDKs yet, that starts in Phase 1.

Set up a `venv` inside this folder before writing scripts here (see `../.gitignore` — `venv/`/`.venv/` are already ignored).

- To create venv

```python
python -m venv venv
```

- To activate venv

```python
venv\Scripts\activate
```

- To deactive

```python
deactivate
```
learning from My own resources 
python script -> Byte code -> python vm 

1. Python import 
 __pycache__ folder -> XXX.cpython-311.pyc (frozen binary or compiled python) this is only for imported files not for top level files -> standard python cpython -> 311 is python version on my machine (3.11).

2. pvm 
it is the runtime for python , also known as python interpreter -> loops through byte code and executes it .here the byte code is not machine code it is specific to python . some python versios are cpython(standard) , jython , iron python , stackless , pypy etc.

# 3. Python shell
it is for instant run of a small code snippit.

# 4. mutable & immutable  in python 

mutable -> list, set, dictionary, bytearray , array

immutabe -> integers , floating-point numbers , string, boolean , tupels ,frozen stes , bytes

>> example -> x=10 Y=X , change x=15 , then print both and it will give 10 for y because it is still pointing to the previous referance .
>>
