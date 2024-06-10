
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { motion } from "framer-motion"

export default function ProviderOnboarding() {
    return (
        <>
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                className="flex flex-col items-center justify-center h-screen"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Organization Name</CardTitle>
                        <CardDescription>Enter the name of your organization to get started.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input placeholder="Enter organization name" />
                        <Button className="w-full">Continue</Button>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                className="flex flex-col items-center justify-center h-screen"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                }}
            >
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Create Roles</CardTitle>
                        <CardDescription>Add the roles that will be used in your organization.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="grid grid-cols-1 gap-4">
                                <Input placeholder="Role title" />
                                <Textarea placeholder="Role description" />
                            </div>
                            <Button className="w-full" variant="outline">
                                Add Role
                            </Button>
                        </div>
                        <Button className="w-full">Continue</Button>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                className="flex flex-col items-center justify-center h-screen"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                transition={{
                    delay: 0.4,
                    duration: 0.5,
                }}
            >
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Include Members</CardTitle>
                        <CardDescription>Add the members that will be part of your organization.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="grid grid-cols-1 gap-4">
                                <Input placeholder="Member name" />
                                <Input placeholder="Member email" type="email" />
                                <Select>
                                    <option value="">Select role</option>
                                    <option value="viewer">Viewer</option>
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                </Select>
                            </div>
                            <Button className="w-full" variant="outline">
                                Add Member
                            </Button>
                        </div>
                        <Button className="w-full">Complete Onboarding</Button>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    )
}