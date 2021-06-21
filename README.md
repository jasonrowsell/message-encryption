# Message Encryption

## Spec

The client offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

> - A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
> - A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
> - A “Reverse Cipher” in which each word of the input message is reversed in place.

To use this service, run the command below:

```
$ node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
```

Here are some examples of running this program:

```sh
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...

> hello world

Here is your encrypted message:

> lipps asvph

$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...

> hello world

Here is your encrypted message:

> olleh dlrow
```

## Planning

### User Stories

```
As a customer,
To utilise a custom encryption service,
I would like three different cipher options to encrypt my messages.
```

```
As a customer,
For an effective user experience,
I would like to be prompted to enter a message to be encrypted.
```

```
As a customer,
To validate that my message has been encrypted,
I would like to display the encrypted message after input.
```

```
As a customer,
To encrypt my messages for privacy,
I would like a “Caesar Cipher”, in which the characters of the input message are shifted alphabetically by a given amount.
```

```
As a customer,
To encrypt my messages for privacy,
I would like a “Symbol Cipher”, in which select characters from the input message are replaced with visually similar symbols.
```

```
As a customer,
To encrypt my messages for privacy,
I would like a “Reverse Cipher”, in which each word of the input message is reversed in place.
```
