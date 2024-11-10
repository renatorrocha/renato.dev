import React, { useEffect, useState } from "react";
import { getCollection } from "astro:content";
import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import BlurFade from "@/components/ui/blur-fade";

const BlogPosts = () => {
    const { i18n } = useTranslation();
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const allPosts = await getCollection("posts");
            const filteredPosts = allPosts.filter(
                (entry) => entry.data.lang === i18n.language
            );
            setPosts(filteredPosts);
        };

        fetchPosts();
    }, [i18n.language]);

    return (
        <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
                <BlurFade delay={BLUR_FADE_DELAY * 3.5 * i} key={post.slug}>
                    <Card className="p-4 shadow-md">
                        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <CardTitle className="truncate max-w-[70%]">
                                {post.data.title}
                            </CardTitle>
                            <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                                {post.data.date}
                            </span>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <p className="text-muted-foreground">
                                {post.data.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.data.tags &&
                                    post.data.tags.map((tag: string) => (
                                        <Badge variant="secondary" key={tag}>
                                            {tag}
                                        </Badge>
                                    ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex justify-end">
                            <Button variant={"outline"}>
                                <a href={`/blog/posts/${post.slug}`}>
                                    Ler mais
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                </BlurFade>
            ))}
        </div>
    );
};

export default BlogPosts;
