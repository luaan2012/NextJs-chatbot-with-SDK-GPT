'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'

export interface ChatProps {}

export function Chat(props: ChatProps) {
    const {messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/chat'
    })

    return (
        <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create c chat bot.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
        { messages.map(message => {
            return (
                <div key={message.id} className='flex gap-2 text-slate-600 text-sm'>
                {message.role === 'user' && (
                    <Avatar>
                        <AvatarFallback>SP</AvatarFallback>
                        <AvatarImage src="https://github.com/diego3g.png" />
                    </Avatar>
                )}

                {message.role === 'assistant' && (
                    <Avatar>
                        <AvatarFallback>SP</AvatarFallback>
                        <AvatarImage src="https://github.com/diego3g.png" />
                    </Avatar>
                )}

                <p className='leading-relaxed'>
                    <span className='block font-bold text-slate-700'>
                        {message.role === 'user' ? 'Usuário' : 'AI'}
                    </span>
                    {message.content}
                </p>
            </div>                
            )
        })}
          
        </CardContent>
        <CardFooter className='space-x-2'>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder='How can I help you?' value={input} onChange={handleInputChange}/>
                <Button type="submit">Send</Button>
            </form>
        </CardFooter>
      </Card>
    )
}