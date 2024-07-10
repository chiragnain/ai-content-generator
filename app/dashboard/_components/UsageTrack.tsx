"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

import React, { useContext, useEffect, useState } from 'react'
import { HistoryItem } from '../history/page';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import Link from 'next/link';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';


function UsageTrack() {

    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { updateCreditUsage } = useContext(UpdateCreditUsageContext)

    useEffect(() => {
        user && GetData()
    }, [user])

    useEffect(() => {
        user && GetData()
    }, [updateCreditUsage && user])

    const GetData = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            const result: HistoryItem[] = await db.select().from(AIOutput)
                .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
            
            GetTotalUsage(result);
        } else {
            console.error('User email address is undefined');
            // Handle the undefined case appropriately
        }
    }

    const GetTotalUsage = (result: HistoryItem[]) => {
        let total: number = 0;
        result.forEach(element => {
            total++;
        })
        setTotalUsage(total)
        console.log(total)
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Beginner Plan</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: (totalUsage / 20) * 100 + "%"
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/20 Requests performed</h2>
            </div>
            <Link href="/dashboard/billing">
                <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
            </Link>
        </div>
    )
}

export default UsageTrack
