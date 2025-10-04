import React from 'react'

const Featuress = () => {
    return (
        <div className="text-white p-4 m-4 items-center">
            <h2 className="text-2xl font-bold mb-4">✨ Features of My Glorious Todo App™ ✨</h2>

            <ul className="space-y-4 text-lg">
                <li>
                    ➕ <strong>Add Unlimited Todos</strong><br />
                    Got 1 task? Add it. Got 100 tasks? Add them too. Got 10,000 tasks? Well… good luck finishing them. 😏
                </li>

                <li>
                    ✅ <strong>Strike Through Like a Pro</strong><br />
                    Mark your tasks as done and watch them get that satisfying <span className="line-through">strikethrough</span> treatment.
                    It’s like saying “I own you, task!” 💪
                </li>

                <li>
                    🗑️ <strong>Delete with Power</strong><br />
                    Made a todo by mistake? Or just want to feel like Thanos? Snap it away into the void. ✨
                </li>

                <li>
                    🌞🌚 <strong>Light/Dark Mode Toggle</strong><br />
                    Daytime vibes? Switch to light mode. Midnight coding sesh? Dark mode has your back.
                    Your retinas will thank you. 👀
                </li>

                <li>
                    📱💻 <strong>Responsive AF</strong><br />
                    Works on your phone, tablet, laptop, smart fridge, probably even your toaster (don’t try).
                </li>

                <li>
                    🤷 <strong>It’s Just a Todo App</strong><br />
                    Like, what else do you expect? Free pizza delivery? A personal butler?
                    Chill—it’s simple, clean, and does the job. 😎
                </li>
            </ul>
        </div>

    )
}

export default Featuress
