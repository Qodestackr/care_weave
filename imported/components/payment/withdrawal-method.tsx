
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function WithdrawalMethod() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Withdrawal Method</CardTitle>
                <CardDescription>Select your preferred withdrawal method.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="withdrawal-method">Withdrawal Method</Label>
                    <Select defaultValue="bank-transfer">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select withdrawal method" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="crypto-wallet">Cryptocurrency Wallet</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="withdrawal-amount">Withdrawal Amount</Label>
                    <Input id="withdrawal-amount" placeholder="Enter amount" type="number" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Proceed with Withdrawal</Button>
            </CardFooter>
        </Card>
    )
}