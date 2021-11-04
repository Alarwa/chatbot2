import React, { Component } from 'react'
import './Task.css';
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

export class Task extends Component {
    render() {
        return (
            <div>
                <form className="d-flex justify-content-center m-auto flex-column w-50 p-4">
                    <h2>Task instructions:</h2>
                    <p>You are required to read the <i> Blockchain technology </i> text. This text is a part of the book <i> Blockchain in the industrial Internet of things</i>, written by Lakshmana Kumar Ramasamy and Seifedine Kadri. withIt should take you between 10 and 20 minutes to read this text. After that, you will be required to answer a group of questions about the information in the text (Questions tab).</p>
                    <br/>
                    <h4>1.	Overview of blockchain</h4>
                    <br/>
                    <p>Before exploring blockchain, it is significant to understand why this latest technology appeared. A response was required to the danger of called double-spending. Note the scenario demonstrated in figure 1. A figure 1 show, Alice pays Bob $10 to buy some books. Once Bob gets this $10, Alice has no way to use the money again for any other dealings because the money is at present in Bob’s ownership. At present, note the scenario is where payments are made in digital form. It is explained in figure 2. Since the format for the currency transfer is in digital form, it is a physical binary file saved somewhere on Alice’s computer. After Alice presents this file (digital currency) to Bob, she can present a copy of it to Lisa too. They both believe that they have earned the currency without any way of recognizing the digital currency and thus deliver the respective merchandise to Alice. It is known as double-spending, where the buyer pays the same amount of money to get services or merchandise from numerous merchants in many locations. To resolve this issue of double spending, one can hire a centralized authority to supervise all transactions. It is demonstrated in figure 3. The centralized authority, usually the bank, keeps a ledger mantaining a record of all business dealings. At present, Alice has to transmit her digital currency to the bank, which enters her ledger that debits Alice’s account. After confirming that Alice has enough money to pay for the digital currency she requires to transmit, it will transmit currency to Bob from the credit in her account in its ledger. At present, it has confirmed that Alice cannot spend money twice. If all digital transactions are transferred to a centralized authority like this, the issue of double-spending can be resolved. It presents one further advantage in ensuring the authenticity of each coin (digital currency) that it receives in business dealings. So counterfeit currency (duplicate currency as happened to Alice who pays Lisa using a copy) will be discovered and prevented from streaming.</p>
                    <img  src={img1}  alt="Figure 1. Alice pays Bob $10 to buy some books."/>
                    <p><center>Figure 1. Alice pays Bob $10 to buy some books.</center></p>
                    <img src={img2} alt="Figure 2. Currency transfer is in digital format." />
                    <p><center>Figure 2. Currency transfer is in digital format.</center></p>
                    <img src={img3} className="img" alt="Figure 3. Hire a centralized authority to supervise all business dealings." width="500" height="600"/>
                    <p><center>Figure 3. Hire a centralized authority to supervise all business dealings.</center></p>
                    <p>Although the launching of centralized authorities resolved the double-spending issue, it also launched one more important issue—the price of constructing and maintaining the centralized authority. As banks required money to carry out their duties, they began to deduct commissions on each transaction they made for their customers. It can occasionally be quite costly, in particular in foreign transfers where many agents (banks) can be involved in the whole agreement. All of the above issues can be resolved by introducing a digital currency, namely bitcoin. This section provides a short description of what bitcoin is before exploring in depth its plan and structure. </p>
                    <p>Bitcoin was launched to the globe in 2008 by Satoshi Nakamoto. Not only did bitcoin solve the double-spending issue, but it further provided numerous other benefits, one of which is the anonymity of transactions. Satoshi who generated and traded some coins in this system is utterly anonymous to the whole world. </p>
                    <p>As you have seen before, the bank keeps a ledger that records all business dealings. This ledger is kept private and maintained by the bank. Satoshi suggested that the ledger should be public and owned by society. In the meantime, when you create such a ledger in public, you can think of it many thoughts. This ledger must be tamper-proof so that no one can alter its entries. Since all entries of this ledger are openly viewable, it must be kept anonymous; you wouldn’t want everyone in the globe to recognize that somebody paid you $10. Also, since there is only one ledger to keep track of all global business dealings, the ledger size can represent a further major anxiety. It is not trivial to provide a resolution to these problems; this chapter is intended to show the basic structure of bitcoin in simple terms. To know the structure of blockchain, you require knowing some of the key components on which it based. So, let us start with public-key cryptography (PKI).</p>
                    <h4>2.	Public key cryptography (PKI) in the blockchain</h4>
                    <p>PKI is also called asymmetric cryptography. It utilizes two keys—private and public. The key is a long binary number. The public key is shared throughout the world and is public as its name implies. The private key must be private and never be lost. In the case of bitcoin, if you lose the private key in your wallet of bitcoin, all your wallets’ contents will be in danger of being stolen immediately; there will be no evidence of who stole all of your money (in your wallet)—that is the anonymity mentioned at the beginning of this chapter. PKI executes two operations—to verify the authenticity and privacy of the message using encryption/decryption. This section will describe both of these operations.</p>
                    <h5>2.1 Authentication</h5>
                    <p>When exchanging messages with both parties, it is important to build reliability between the sender and the recipient. In particular, the recipient should trust the source of the message. Going to our previous scenario (shown in figure 1) of Alice transferring money to Bob by buying merchandise from him, let us see how PKI constructs this reliability between Alice and Bob. See figure 4.</p>
                    <img src={img4} className="img" alt="Figure 4. PKI constructs reliability between Alice and Bob." width="500" height="600"/>
                    <p><center>Figure 4. PKI constructs reliability between Alice and Bob.</center></p>
                    <img src={img5} className="img" alt="Figure 5. Bob generates a message and transmits it to Alice." width="500" height="600"/>
                    <p><center>Figure 5. Bob generates a message and transmits it to Alice.</center></p>
                    <p>First, if Alice desires to transmit money to Bob, she has to generate her public and private key. Consider that two keys are at all times occurring in pairs jointly, and you cannot combine public and private keys for various people or situations. At present, Alice says she sends $10 to Bob. So she generates a message (a plain text message) having Alice’s public key (sender), Bob’s public key, and the sum ($10). The reason for this money transfer, for example, ‘I desire to purchase some books from you’ is further contained in this message. Every message is currently signed using the private key of Alice. When Bob acquires this message, he will utilize the PKI signature validation algorithm and the public key of Alice to verify that the message came from Alice. It launches the reliability of the message creator. Next, let us take a look at the privacy of the message.</p>
                    <h5>2.2 Privacy of the message</h5>
                    <p>At the time Bob has obtained his amount paid, he desires to transmit a link to his ebook that Alice desires to purchase. So Bob will compose a message he transmits to Alice, as demonstrated in figure 5. Bob generates a message, for example ‘Here is the link to the book you requested’, signs it with the public key of Alice (obtained from the request message of Alice) and encrypts the message using the secret key distributed between the two during the handshake of the HTTPS transfer. Now Bob knows that only Alice can decipher the message utilizing the private key held by Alice. Also, someone obstructing the message will not be capable of retrieving its contents for the reason that the contents are encrypted by a secret key held solely by Alice and Bob. It confirms to Bob that use to his ebook is only given to Alice.</p>
                    <h4>3. Hashing</h4>
                    <p>One of the primary techniques in PKI is a hash technique. The hash technique maps any arbitrary amount of information to static size information. Bitcoin utilizes the SHA-256 hash technique to generate a hash of 256 bits (32 bytes). This is explained in figure 6. </p>
                    <p>When Alice places an order with Bob, she generates the same message as the one displayed above. This message has been hashed with a hash technique that generates a hash of 32 bytes. The usage of this hash is for entirely practical reasons, the hash (256 bit value) regarded as distinctive in the message content. Once the message is changed, the value of the hash will alter. Not only does the hash provide value, but the original message also cannot be rebuilt. </p>
                    <img src={img6} className="img2" alt="Figure 6. Hashing." width="500" height="600"/>
                    <p>Figure 6. Hashing.</p>
                    <p><b>Source:</b></p>
                    <p>Ramasamy, L. K., Kadry, Seifedine, & Institute of Physics. (2021). Blockchain in the industrial Internet of things.</p>
                </form>
            </div>
        )
    }
}

export default Task
